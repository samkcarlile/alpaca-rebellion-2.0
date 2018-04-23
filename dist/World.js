define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var World = (function () {
        function World(ctx, fps) {
            this.c = ctx;
            this.fps = fps;
            this.entities = [];
        }
        World.prototype.add = function (entity, index) {
            var i = index || this.entities.length;
            this.entities.splice(index, 0, entity);
            return i;
        };
        World.prototype.draw = function () {
            for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
                var entity = _a[_i];
                entity.draw(this);
            }
        };
        World.prototype.update = function () {
            for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
                var entity = _a[_i];
            }
        };
        World.prototype.start = function () {
        };
        World.prototype.stop = function () {
        };
        World.prototype.pause = function () {
        };
        World.prototype.ctx = function () {
            return this.c;
        };
        return World;
    }());
    exports.World = World;
});
