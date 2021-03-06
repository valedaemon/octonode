// Generated by CoffeeScript 1.9.3
(function() {
  var Notification;

  Notification = (function() {
    function Notification(id, client) {
      this.id = id;
      this.client = client;
    }

    Notification.prototype.markAsRead = function(cb) {
      return this.client.post("/api/v3/notifications/threads/" + this.id, {}, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 205) {
          return cb(new Error('Notification mark as read error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Notification.prototype.unsubscribe = function(cb) {
      return this.client.del("/api/v3/notifications/threads/" + this.id + "/subscription", {}, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error('User mute error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Notification.prototype.subscribe = function(cb) {
      var options;
      options = {
        subscribed: true,
        ignored: false
      };
      return this.client.put("/api/v3/notifications/threads/" + this.id + "/subscription", options, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('User unmute error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Notification.prototype.mute = function(cb) {
      var options;
      options = {
        subscribed: false,
        ignored: true
      };
      return this.client.put("/api/v3/notifications/threads/" + this.id + "/subscription", options, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('User ignore error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    return Notification;

  })();

  module.exports = Notification;

}).call(this);
