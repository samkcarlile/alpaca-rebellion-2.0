define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventReceiver = (function () {
        function EventReceiver() {
            this.events = [];
        }
        EventReceiver.prototype.checkEvents = function (callback) {
            for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
                var e = _a[_i];
                callback(e);
            }
        };
        EventReceiver.prototype.queueEvent = function (e) {
            this.events.push(e);
        };
        return EventReceiver;
    }());
    exports.EventReceiver = EventReceiver;
});
