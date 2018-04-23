var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./Entity"], function (require, exports, Entity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(img, x, y, speed) {
            var _this = _super.call(this, x, y) || this;
            _this.image = img;
            _this.speed = speed;
            return _this;
        }
        Player.prototype.draw = function (world) {
            world.ctx().drawImage(this.image, this.x, this.y);
        };
        Player.prototype.update = function () {
            var _this = this;
            this.checkEvents(function (e) {
                switch (e.name) {
                    case "move":
                        var dir = e.data;
                        if (dir === "left") {
                            _this.x -= _this.speed;
                        }
                        else if (dir === "right") {
                            _this.x += _this.speed;
                        }
                        else if (dir === "up") {
                            _this.y -= _this.speed;
                        }
                        else if (dir === "down") {
                            _this.y += _this.speed;
                        }
                }
            });
        };
        return Player;
    }(Entity_1.Entity));
    exports.Player = Player;
});
