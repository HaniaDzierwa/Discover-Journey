import {Component, Input} from '@angular/core';
import {Slide} from "../interfaces/slide";

@Component({
  selector: 'app-carousele',
  templateUrl: './carousele.component.html',
  styleUrls: ['./carousele.component.scss']
})
export class CarouseleComponent {

  currenSlideIndex: number = 0;
  nextSlideDelay: number = 6000
  @Input() slides: Slide[] = []


  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currenSlideIndex].url}')`;
  }

  getCurrentSlide(): number {
    return this.currenSlideIndex;
  }

  goToSlide(currentSlideIndex: number) {
    this.currenSlideIndex = currentSlideIndex;
  }

  showNext() {
    this.currenSlideIndex === this.slides.length - 1 ? this.currenSlideIndex = 0 : this.currenSlideIndex++
    this.getCurrentSlide();
  }

  ngOnInit() {
    setInterval(() => {
      this.showNext()
    }, this.nextSlideDelay);
  }
}
