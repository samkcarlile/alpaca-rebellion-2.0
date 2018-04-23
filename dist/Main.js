define(["require", "exports", "./World", "./Player", "./ImageManager"], function (require, exports, World_1, Player_1, ImageManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Main = (function () {
        function Main() {
        }
        Main.prototype.main = function () {
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
        };
        return Main;
    }());
    function createCanvas(w, h) {
        var canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.style.outline = "1px black solid";
        document.body.appendChild(canvas);
        return canvas.getContext('2d');
    }
});
