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

  getNext: (week, $scope) ->
    console.log 'get next week'  
    startDay = week.startDay.clone().addWeeks(1)
    @years[startDay.getFullYear()] ||= new Year(startDay.getFullYear(), firebaseURL)
    currentWeek = startDay.getWeek()
    if currentWeek == 52
      week = @years[startDay.getFullYear()].weeks[0]
    else
      week = @years[startDay.getFullYear()].weeks[currentWeek - 1]

    projects = if @settings then @settings.projects else null
    week.loadFromStore(projects, $scope)
    week

  getPrevious: (week, $scope) ->
    console.log 'get previous'
    startDay = week.startDay.clone().addWeeks(-1)
    @years[startDay.getFullYear()] ||= new Year(startDay.getFullYear(), firebaseURL)
    currentWeek = startDay.getWeek()
    if currentWeek == 1
      week = @years[startDay.getFullYear()].weeks[52]
    else
      week = @years[startDay.getFullYear()].weeks[currentWeek - 1]
    projects = if @settings then @settings.projects else null

    week.loadFromStore(projects, $scope)
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
    console.log @firebaseURL.url()
    @store = new Firebase(@firebaseURL.url())
    @store.on('value',(dataset)->
      if dataset.val()
        self.load(dataset)
      else if !@projects 
        self.loadDefaults(defaultProjects)

      setTimeout((->
        $scope.doneLoadingWeek()
      ),1)
    )

  addProject: (project) ->
    if project.days 
      bandwidths = project.days
    else 
      bandwidths = [
        {name: 'Monday', hours: 0},
        {name: 'Tuesday', hours: 0},
        {name: 'Wednesday', hours: 0},
        {name: 'Thursday', hours: 0},
        {name: 'Friday', hours: 0},
        {name: 'Saturday', hours: 0},
        {name: 'Sunday', hours: 0}
      ]
    @projects.push({name: project.name, days: bandwidths})

  cloneProjects: (week) ->
    @projects = []
    addProject(project) for project in week.projects

  save: ->
    @store.set(angular.fromJson(angular.toJson(@projects)))

  load: (dataset)->
    @projects = angular.fromJson(angular.toJson(dataset.val()))

  loadDefaults: (defaultProjects)->
    @addProject(angular.fromJson(angular.toJson(project))) for project in defaultProjects

  reset: (defaultProjects) ->
    @projects = []
    @loadDefaults(defaultProjects)
    @save()


