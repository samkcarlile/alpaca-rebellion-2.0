import { World } from './World'
import { Player } from './Player'
import { ImageManager } from './ImageManager'

let ctx = createCanvas(500,500);
let world = new World(ctx, 60);
let imageManager: ImageManager = new ImageManager({
  startScreen: "/res/chars/background.png",
  background: "/res/chars/bg.png",
  missile: "/res/chars/missile-54.png",
  bullet: "/res/chars/bullet.png",
  robot: "/res/chars/robot.png",
});
imageManager.add("player", "/res/chars/character.png");
let player = new Player(imageManager.get("player"), 40, 40, 2);
world.add(player);
world.draw();

function createCanvas(w: number, h: number): CanvasRenderingContext2D {
  let canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  canvas.style.outline = "1px black solid";
  document.body.appendChild(canvas);

  return canvas.getContext('2d');
}