import * as c from './common'

export class World {
  private c: CanvasRenderingContext2D;
  private entities: c.StaticEntity[];
  private fps: number;
  
  constructor(ctx: CanvasRenderingContext2D, fps: number) {
    this.c = ctx;
    this.fps = fps;
    this.entities = [];
  }

  public add(entity: c.StaticEntity, index?: number): number {
    var i = index || this.entities.length;
    this.entities.splice(index, 0, entity);
    return i;
  }

  public draw(): void {
    for (let entity of this.entities) {
      entity.draw(this);
    }
  }

  public update(): void {
    for (let entity of this.entities) {
      
    }
  }

  public start(): void {

  }

  public stop(): void {

  }

  public pause(): void { //doesn't reset frame count like stop does

  }
  
  public ctx(): CanvasRenderingContext2D {
    return this.c;
  }


}