import { Entity } from './Entity';
import * as c from './common'


export class Player extends Entity {
  x: number;
  y: number;
  score: number;
  speed: number;
  image: HTMLImageElement;
  
  constructor(img: HTMLImageElement, x: number, y: number, speed: number) {
    super(x, y);
    this.image = img;
    this.speed = speed;
  }

  public draw(world: c.World): void {
    world.ctx().drawImage(this.image, this.x, this.y); 
  }

  public update(): void {
    this.checkEvents((e) => {
      switch (e.name) {
        case "move":
          let dir = <string>e.data;
          if (dir === "left") {
            this.x -= this.speed;
          } else if (dir === "right") {
            this.x += this.speed;
          } else if (dir === "up") {
            this.y -= this.speed;
          } else if (dir === "down") {
            this.y += this.speed;
          }
      }
    })

  }

}