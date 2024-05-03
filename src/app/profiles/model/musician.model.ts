export class Musician {
  public name: string;
  public imageUrl: string;
  public manager: string;
  public description: string;

  constructor(name: string, imageUrl: string, manager: string, description: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.manager = manager;
    this.description = description;
  }
}
