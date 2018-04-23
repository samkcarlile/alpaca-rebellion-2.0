function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  canvas.style.outline = "1px black solid";
  document.body.appendChild(canvas);
}

// Image Manager
function ImageManager() {
  
}

ImageManager.prototype.add = function (name, url) {
  var image = new Image();
  image.src = url;
};

function getImage(url) {
  var image = new Image();
  image.src = url;
}

var Player = {
  image: 
  x: 10,
  y: 200,
  score: 0,
  speed: 10,
  draw: function (ctx) {
    ctx.drawImage()
  }
};

var Game = {
  enemies: [],
  keys: [],
  images: [],
  player: 
};