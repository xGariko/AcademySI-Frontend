export class CourseModel {
  title: string;
  description: string;
  duration: number;
  price: number;
  ratingsCount: number;
  ratingsTotal: number;
  imgUrl: string;

  constructor(
    data : any
  ) {
    this.title = data.title;
    this.description = data.description;
    this.duration = data.duration;
    this.price = data.price;
    this.ratingsCount = data.ratingsCount;
    this.ratingsTotal = data.ratingsTotal;
    this.imgUrl = data.imgUrl;
  }

  getRating(): number {
    if(this.ratingsCount == 0) return 0;

    const averageRating = this.ratingsTotal / this.ratingsCount;
    return Math.round(averageRating * 2) / 2;
  }
}
