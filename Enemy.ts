import { Entity } from './Entity'
import * as c from './common'

export class Enemy extends Entity {
  x: number;
  y: number;
  speed: number;
  static image: HTMLImageElement = new Image();//imageManager.get("robot");
  
  constructor() {
    super(Math.floor(Math.random() * 200) + 1100, Math.floor(Math.random() * 400));
    this.speed = 2;
  }
  
  public draw(world: c.World): void {
    world.ctx().drawImage(Enemy.image, this.x, this.y);
  }

  public update(): void {
    this.checkEvents((e) => {
      switch (e.name) {
        case "die":
          //somehow mark me for removal
          break;
      }
    })

  }
}