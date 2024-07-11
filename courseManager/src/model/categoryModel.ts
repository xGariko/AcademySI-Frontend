export class CategoryModel {
  title: string;
  imgUrl: string;
  description: string;
  constructor
  (
    data : any
  ) {
    this.title = data.name;
    this.imgUrl = data.imgUrl;
    this.description = "Description will be implemented soon";
  }

}
