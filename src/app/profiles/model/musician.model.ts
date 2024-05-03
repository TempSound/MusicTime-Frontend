export class Musician {
  private name:any;
  private manager:any;
  private description:any;
  private imageUrl:any; // Nueva propiedad para la URL de la imagen

  constructor(name: any, manager: any, description: any, imageUrl: any) {
    this.name = name;
    this.manager = manager;
    this.description = description;
    this.imageUrl = imageUrl; // Inicializa la URL de la imagen
  }

}
