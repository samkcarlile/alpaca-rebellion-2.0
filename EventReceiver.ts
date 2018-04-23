import * as c from './common'

export class EventReceiver {
  events: c.SEvent[];

  constructor() {
    this.events = [];
  }

  public checkEvents(callback: c.EventHandlerFunc): void {
    for (let e of this.events) {
      callback(e);
    }
  }

  public queueEvent(e: c.SEvent): void {
    this.events.push(e);
  }
}