import { EventReceiver } from './EventReceiver'

export class PlayerController {
  bindings: Object;
  target: EventReceiver;
  receiver: HTMLElement;

  constructor(obj: EventReceiver, bindings: Object) {
    this.receiver = new HTMLElement();
    this.target = obj;
    this.bindings = bindings;
  }

  public emit(dir: string): void {
    this.target.queueEvent({name: "move", data: dir});
  }

  private listen(): void {
    this.receiver.addEventListener("keydown", (key) => {
      let code = this.bindings[key.keyCode];
      if (code !== undefined) {
        this.emit(this.bindings[code]);
      } 
    })
  }
}