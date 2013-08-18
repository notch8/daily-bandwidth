class app.WeekService
  constructor: (firebaseURL)->
    @firebaseURL = new FirebaseUrl(firebaseURL)
    @currentDate = new XDate()
    @years = {}
    @years[@currentDate.getFullYear()] = new Year(@currentDate.getFullYear(), @firebaseURL)

  setUser: (user)->
    FirebaseUrl.user = user.username

  setSettings: (settings)->
    @settings = settings

  thisWeek: ($scope) ->
    week = @years[@currentDate.getFullYear()].weeks[@currentDate.getWeek() - 1]
    console.log(@settings)
    projects = if @settings then @settings.projects else null
    week.loadFromStore(projects, $scope)
    week

  getNext: (week) ->
    console.log 'get next week'  
    startDay = week.clone().addWeeks(1)
    @years[startDay.getFullYear()] ||= new Year(startDay.getFullYear(), firebaseURL)
    currentWeek = startDay.getWeek()
    if currentWeek == 52
      week = @years[startDay.getFullYear()].weeks[0]
    else
      week = @years[startDay.getFullYear()].weeks[currentWeek - 1]
    week.loadFromStore()
    week

  getPrevious: (week) ->
    console.log 'get previous'
    startDay = week.clone().addWeeks(-1)
    @years[startDay.getFullYear()] ||= new Year(startDay.getFullYear(), firebaseURL)
    currentWeek = startDay.getWeek()
    if currentWeek == 1
      week = @years[startDay.getFullYear()].weeks[52]
    else
      week = @years[startDay.getFullYear()].weeks[currentWeek - 1]
    week.loadFromStore()
    week

class FirebaseUrl
  @user: null

  constructor: (baseUrlString)->
    @baseUrlString = baseUrlString

  setYear: (year)->
    @year = year
  setWeek: (week)->
    @week = week
  cloneForWeek: (week)->
    newUrl = new FirebaseUrl(@baseUrlString)
    newUrl.setYear(@year)
    newUrl.setWeek(week)
    newUrl

  url: ->
    "#{@baseUrlString}/#{FirebaseUrl.user}/weeks/#{@year}/#{@week}"


class Year
  constructor: (year, firebaseURL)->
    @firebaseURL = firebaseURL
    @firebaseURL.setYear(year)
    @year = year
    @weeks = []
    @weeks.push(new Week(firebaseURL.cloneForWeek(weekNumber))) for weekNumber in [0..51]

  addWeekFor: (weekNumber)->
    url = new firebaseURL()
    url.setYear

class Week
  constructor: (firebaseURL)->
    self = this
    @firebaseURL = firebaseURL

    @startDay = new XDate()
    @startDay.setWeek(@firebaseURL.week + 1, @firebaseURL.year)
    @projects = []

  loadFromStore:(defaultProjects, $scope)->  
    self = this
    @store = new Firebase(@firebaseURL.url())
    @store.on('value',(dataset)->
      self.load(dataset)
      console.log dataset.val()
      if !dataset.val()
        self.loadDefaults(defaultProjects)

      $scope.doneLoadingWeek()
    )

  addProject: (project) ->
    console.log 'adding project'
    bandwidths = if project.days then project.days else [0,0,0,0,0,0,0]
    @projects.push({name: project.name, days: bandwidths})

  cloneProjects: (week) ->
    @projects = []
    addProject(project) for project in week.projects

  save: ->
    @store.set(@projects)

  load: (dataset)->
    @projects = dataset.val()

  loadDefaults: (defaultProjects)->
    @addProject(project) for project in defaultProjects

  reset: (defaultProjects) ->
    @projects = []
    @loadDefaults(defaultProjects)
    @save()


