import { EventReceiver } from './EventReceiver'
import * as c from './common'

export class StaticEntity extends EventReceiver {
  hash: number;
  x: number;
  y: number;
  constructor(x: number, y: number) {
    super();
    this.hash = Date.now();
    this.x = x;
    this.y = y;
    this.events = [];
  }
  public draw(world: c.World): void {}
}