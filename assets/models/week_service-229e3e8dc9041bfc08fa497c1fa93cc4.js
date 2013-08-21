(function() {
  var FirebaseUrl, Week, Year;

  app.WeekService = (function() {
    function WeekService(firebaseURL) {
      this.firebaseURL = new FirebaseUrl(firebaseURL);
      this.currentDate = new XDate();
      this.years = {};
      this.years[this.currentDate.getFullYear()] = new Year(this.currentDate.getFullYear(), this.firebaseURL);
    }

    WeekService.prototype.setUser = function(user) {
      return FirebaseUrl.user = user.username;
    };

    WeekService.prototype.setSettings = function(settings) {
      return this.settings = settings;
    };

    WeekService.prototype.thisWeek = function($scope) {
      var projects, week;
      week = this.years[this.currentDate.getFullYear()].weeks[this.currentDate.getWeek() - 1];
      projects = this.settings ? this.settings.projects : null;
      week.loadFromStore(projects, $scope);
      return week;
    };

    WeekService.prototype.getNext = function(week, $scope) {
      var currentWeek, projects, startDay, _base, _name;
      startDay = week.startDay.clone().addWeeks(1);
      (_base = this.years)[_name = startDay.getFullYear()] || (_base[_name] = new Year(startDay.getFullYear(), firebaseURL));
      currentWeek = startDay.getWeek();
      if (currentWeek === 52) {
        week = this.years[startDay.getFullYear()].weeks[0];
      } else {
        week = this.years[startDay.getFullYear()].weeks[currentWeek - 1];
      }
      projects = this.settings ? this.settings.projects : null;
      week.loadFromStore(projects, $scope);
      return week;
    };

    WeekService.prototype.getPrevious = function(week, $scope) {
      var currentWeek, projects, startDay, _base, _name;
      startDay = week.startDay.clone().addWeeks(-1);
      (_base = this.years)[_name = startDay.getFullYear()] || (_base[_name] = new Year(startDay.getFullYear(), firebaseURL));
      currentWeek = startDay.getWeek();
      if (currentWeek === 1) {
        week = this.years[startDay.getFullYear()].weeks[52];
      } else {
        week = this.years[startDay.getFullYear()].weeks[currentWeek - 1];
      }
      projects = this.settings ? this.settings.projects : null;
      week.loadFromStore(projects, $scope);
      return week;
    };

    return WeekService;

  })();

  FirebaseUrl = (function() {
    FirebaseUrl.user = null;

    function FirebaseUrl(baseUrlString) {
      this.baseUrlString = baseUrlString;
    }

    FirebaseUrl.prototype.setYear = function(year) {
      return this.year = year;
    };

    FirebaseUrl.prototype.setWeek = function(week) {
      return this.week = week;
    };

    FirebaseUrl.prototype.cloneForWeek = function(week) {
      var newUrl;
      newUrl = new FirebaseUrl(this.baseUrlString);
      newUrl.setYear(this.year);
      newUrl.setWeek(week);
      return newUrl;
    };

    FirebaseUrl.prototype.url = function() {
      return "" + this.baseUrlString + "/" + FirebaseUrl.user + "/weeks/" + this.year + "/" + this.week;
    };

    return FirebaseUrl;

  })();

  Year = (function() {
    function Year(year, firebaseURL) {
      var weekNumber, _i;
      this.firebaseURL = firebaseURL;
      this.firebaseURL.setYear(year);
      this.year = year;
      this.weeks = [];
      for (weekNumber = _i = 0; _i <= 51; weekNumber = ++_i) {
        this.weeks.push(new Week(firebaseURL.cloneForWeek(weekNumber)));
      }
    }

    Year.prototype.addWeekFor = function(weekNumber) {
      var url;
      url = new firebaseURL();
      return url.setYear;
    };

    return Year;

  })();

  Week = (function() {
    function Week(firebaseURL) {
      var self;
      self = this;
      this.firebaseURL = firebaseURL;
      this.startDay = new XDate();
      this.startDay.setWeek(this.firebaseURL.week + 1, this.firebaseURL.year);
      this.projects = [];
    }

    Week.prototype.loadFromStore = function(defaultProjects, $scope) {
      var self;
      self = this;
      this.store = new Firebase(this.firebaseURL.url());
      return this.store.on('value', function(dataset) {
        if (dataset.val()) {
          self.load(dataset);
        } else if (self.projects.length === 0) {
          self.loadDefaults(defaultProjects);
        }
        return setTimeout((function() {
          return $scope.doneLoadingWeek(self);
        }), 1);
      });
    };

    Week.prototype.addProject = function(project) {
      var bandwidths;
      if (project.days) {
        bandwidths = this.clone(project.days);
      } else {
        bandwidths = [
          {
            name: 'Monday',
            hours: 0
          }, {
            name: 'Tuesday',
            hours: 0
          }, {
            name: 'Wednesday',
            hours: 0
          }, {
            name: 'Thursday',
            hours: 0
          }, {
            name: 'Friday',
            hours: 0
          }, {
            name: 'Saturday',
            hours: 0
          }, {
            name: 'Sunday',
            hours: 0
          }
        ];
      }
      return this.projects.push({
        name: project.name,
        days: bandwidths
      });
    };

    Week.prototype.cloneProjects = function(week) {
      var project, _i, _len, _ref, _results;
      this.projects = [];
      _ref = week.projects;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        project = _ref[_i];
        _results.push(this.addProject(project));
      }
      return _results;
    };

    Week.prototype.save = function() {
      return this.store.set(this.clone(this.projects));
    };

    Week.prototype.load = function(dataset) {
      return this.projects = this.clone(dataset.val());
    };

    Week.prototype.loadDefaults = function(defaultProjects) {
      var project, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = defaultProjects.length; _i < _len; _i++) {
        project = defaultProjects[_i];
        _results.push(this.addProject(this.clone(project)));
      }
      return _results;
    };

    Week.prototype.reset = function(defaultProjects) {
      this.projects = [];
      this.loadDefaults(defaultProjects);
      return this.save();
    };

    Week.prototype.clone = function(obj) {
      return angular.fromJson(angular.toJson(obj));
    };

    return Week;

  })();

}).call(this);
