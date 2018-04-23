import { StaticEntity } from './StaticEntity'
import * as c from './common'

export class Scoreboard extends StaticEntity {
  score: number;

  constructor(x: number, y: number) {
    super(x,y);
    this.score = 0;
  }

  public draw(world: c.World): void {
    let ctx = world.ctx();
    ctx.font = "24 Arial-Bold";
    ctx.fillText("Score: " + this.score, this.x, this.y);
  }

  public update(): void {
    this.checkEvents((e) => {
      switch (e.name) {
        case "add":
          this.score += <number>e.data;
          break;
        case "sub":
          this.score -= <number>e.data;
          break;
      }
    })
  }
}