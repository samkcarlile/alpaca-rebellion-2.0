export class ImageManager {
  urls: Object;

  constructor(urls?: Object) {
    if (urls === undefined) {
      this.urls = {};
    } else {
      this.urls = urls;//loop through the object and create the image object for each key
    }
  }

  public add(name: string, url: string): void {
    let img = new Image();
    img.src = url;
    this.urls[name] = img;
  }

  public get(name: string): HTMLImageElement {
    return this.urls[name];
  }
}