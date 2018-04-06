(function() {
    "use strict";
    window.idle = function(options) {
        var defaults = {
            idle: 6e4,
            events: ["mousemove", "keydown", "mousedown", "touchstart"],
            onIdle: function() {},
            onActive: function() {},
            onHide: function() {},
            onShow: function() {},
            keepTracking: true,
            startAtIdle: false,
            recurIdleCall: false
        };
        var settings = extend({}, defaults, options);
        var idle = settings.startAtIdle;
        var visible = !settings.startAtIdle;
        var visibilityEvents = ["visibilitychange", "webkitvisibilitychange", "mozvisibilitychange", "msvisibilitychange"];
        var lastId = null;
        var resetTimeout, timeout;
        window.addEventListener("idle:stop", function(event) {
            bulkRemoveEventListener(window, settings.events);
            settings.keepTracking = false;
            resetTimeout(lastId, settings)
        });
        var resetTimeout = function resetTimeout(id, settings) {
            if (idle) {
                idle = false;
                settings.onActive.call()
            }
            clearTimeout(id);
            if (settings.keepTracking) {
                return timeout(settings)
            }
        };
        var timeout = function timeout(settings) {
            var timer = settings.recurIdleCall ? setInterval : setTimeout;
            var id;
            id = timer(function() {
                idle = true;
                settings.onIdle.call()
            }, settings.idle);
            return id
        };
        return {
            start: function() {
                lastId = timeout(settings);
                bulkAddEventListener(window, settings.events, function(event) {
                    lastId = resetTimeout(lastId, settings)
                });
                if (settings.onShow || settings.onHide) {
                    bulkAddEventListener(document, visibilityEvents, function(event) {
                        if (document.hidden || document.webkitHidden || document.mozHidden || document.msHidden) {
                            if (visible) {
                                visible = false;
                                settings.onHide.call()
                            }
                        } else {
                            if (!visible) {
                                visible = true;
                                settings.onShow.call()
                            }
                        }
                    })
                }
            }
        }
    };
    var bulkAddEventListener = function bulkAddEventListener(object, events, callback) {
        events.forEach(function(event) {
            object.addEventListener(event, function(event) {
                callback(event)
            })
        })
    };
    var bulkRemoveEventListener = function bulkRemoveEventListener(object, events) {
        events.forEach(function(event) {
            object.removeEventListener(event)
        })
    };
    var extend = function extend(out) {
        out = out || {};
        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i]) {
                continue
            }
            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    out[key] = arguments[i][key]
                }
            }
        }
        return out
    }
})();