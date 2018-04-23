define(["require", "exports"], function (require, exports) {
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
