import {Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
  placeholderUrl: string = "https://fakeimg.pl/600x400"

  @Input() title: string = "";
  @Input() desc: string = "";
  @Input() imageUrl: string = "";
  @Input() courseUrl: string = "";
  @Input() rating: number = NaN;
  @Input() price: number = NaN;
  @Input() ratingsCount: number = NaN;



  constructor(
    private renderer: Renderer2,
  ) {}

  @ViewChild('ratingContainer', { static: false }) ratingContainer!: ElementRef;


  handleClick(){
    alert("Link to course")
  }

  ngAfterViewInit(): void {


    let ratingValue = this.rating;


    if (this.ratingContainer) {
      const container = this.ratingContainer.nativeElement;

      // Aggiungi le stelle piene
      for (let i = 0; i < Math.floor(ratingValue); i++) {
        const fullStar = this.renderer.createElement('i');
        this.renderer.addClass(fullStar, 'bi');
        this.renderer.addClass(fullStar, 'bi-star-fill');
        this.renderer.appendChild(container, fullStar);
      }

      // Aggiungi una stella a metà se c'è una parte decimale
      if (ratingValue % 1 !== 0) {
        const halfStar = this.renderer.createElement('i');
        this.renderer.addClass(halfStar, 'bi');
        this.renderer.addClass(halfStar, 'bi-star-half');
        this.renderer.appendChild(container, halfStar);
      }

      // Aggiungi stelle vuote fino a raggiungere 5 stelle
      const totalStars = Math.ceil(ratingValue); // Numero totale di stelle riempite (piene e metà)
      for (let i = totalStars; i < 5; i++) {
        const emptyStar = this.renderer.createElement('i');
        this.renderer.addClass(emptyStar, 'bi');
        this.renderer.addClass(emptyStar, 'bi-star');
        this.renderer.appendChild(container, emptyStar);
      }
    }
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = this.placeholderUrl;
  }

  ngOnInit(): void {
  }

}
