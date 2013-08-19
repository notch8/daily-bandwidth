(function() {
  app.AlertService = (function() {
    function AlertService() {
      this.all = [];
    }

    AlertService.prototype.addError = function(msg, expires) {
      if (expires == null) {
        expires = null;
      }
      this.all.splice(0, 1);
      return this.all.push({
        type: 'error',
        msg: msg
      });
    };

    AlertService.prototype.addSuccess = function(msg, expires) {
      var params;
      if (expires == null) {
        expires = 500;
      }
      params = {
        type: 'success',
        msg: msg
      };
      this.all.splice(0, 1);
      return this.all.push(params);
    };

    AlertService.prototype.addNotice = function(msg, expires) {
      if (expires == null) {
        expires = 500;
      }
      this.all.splice(0, 1);
      return this.all.push({
        msg: msg
      });
    };

    AlertService.prototype.clear = function() {
      return this.all = [];
    };

    return AlertService;

  })();

}).call(this);
