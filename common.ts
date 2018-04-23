

export interface SEvent {
  name: string
  data: any
}

export interface EventHandlerFunc {
  (event: SEvent): void;
}

export interface EventReceiver {
  checkEvents(callback: EventHandlerFunc): void
  queueEvent(e: SEvent): void
}

export interface World {
  add(entity: StaticEntity, index?: number): number
  draw(): void
  update(): void
  start(): void
  stop(): void
  pause(): void
  ctx(): CanvasRenderingContext2D
}

export interface StaticEntity extends EventReceiver {
  draw(world: World): void
}