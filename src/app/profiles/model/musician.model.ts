export class Musician {
  public name: string;
  public imageUrl: string;
  public manager: string;
  public description: string;
  public socialNetwork: string;

  constructor(name: string, imageUrl: string, manager: string, description: string, socialNetwork: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.manager = manager;
    this.description = description;
    this.socialNetwork = socialNetwork;
  }
}
