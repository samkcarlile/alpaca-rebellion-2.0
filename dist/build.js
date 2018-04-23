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
define("common", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("World", ["require", "exports"], function (require, exports) {
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
define("EventReceiver", ["require", "exports"], function (require, exports) {
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
define("StaticEntity", ["require", "exports", "EventReceiver"], function (require, exports, EventReceiver_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StaticEntity = (function (_super) {
        __extends(StaticEntity, _super);
        function StaticEntity(x, y) {
            var _this = _super.call(this) || this;
            _this.hash = Date.now();
            _this.x = x;
            _this.y = y;
            _this.events = [];
            return _this;
        }
        StaticEntity.prototype.draw = function (world) { };
        return StaticEntity;
    }(EventReceiver_1.EventReceiver));
    exports.StaticEntity = StaticEntity;
});
define("Entity", ["require", "exports", "StaticEntity"], function (require, exports, StaticEntity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Entity = (function (_super) {
        __extends(Entity, _super);
        function Entity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Entity.prototype.update = function (w) { };
        return Entity;
    }(StaticEntity_1.StaticEntity));
    exports.Entity = Entity;
});
define("Player", ["require", "exports", "Entity"], function (require, exports, Entity_1) {
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
define("ImageManager", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageManager = (function () {
        function ImageManager(urls) {
            if (urls === undefined) {
                this.urls = {};
            }
            else {
                this.urls = urls; //loop through the object and create the image object for each key
            }
        }
        ImageManager.prototype.add = function (name, url) {
            var img = new Image();
            img.src = url;
            this.urls[name] = img;
        };
        ImageManager.prototype.get = function (name) {
            return this.urls[name];
        };
        return ImageManager;
    }());
    exports.ImageManager = ImageManager;
});
define("Main", ["require", "exports", "World", "Player", "ImageManager"], function (require, exports, World_1, Player_1, ImageManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ctx = createCanvas(500, 500);
    var world = new World_1.World(ctx, 60);
    var imageManager = new ImageManager_1.ImageManager({
        startScreen: "/res/chars/background.png",
        background: "/res/chars/bg.png",
        missile: "/res/chars/missile-54.png",
        bullet: "/res/chars/bullet.png",
        robot: "/res/chars/robot.png",
    });
    imageManager.add("player", "/res/chars/character.png");
    var player = new Player_1.Player(imageManager.get("player"), 40, 40, 2);
    world.add(player);
    world.draw();
    function createCanvas(w, h) {
        var canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.style.outline = "1px black solid";
        document.body.appendChild(canvas);
        return canvas.getContext('2d');
    }
});
