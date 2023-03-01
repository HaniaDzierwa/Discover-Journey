import {Component} from '@angular/core'
import {Slide} from "../Slide";
import {animate} from "@angular/animations";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {

  currenSlideIndex: number = 0;
  nextSlideDelay: number = 6000
  slides: Slide[] = [
    {
      url: '../../assets/image/first.jpg'
    },
    {
      url: '../../assets/image/second.jpg'
    },
    {
      url: '../../assets/image/third.jpg'
    },
    {
      url: '../../assets/image/fourth.jpg'
    },
    {
      url: '../../assets/image/fifth.jpg'
    },
    {
      url: '../../assets/image/sixth.jpg'
    },
  ];

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
    this.currenSlideIndex  === this.slides.length-1  ? this.currenSlideIndex=0 : this.currenSlideIndex++
    this.getCurrentSlide();
  }

  ngOnInit() {
    setInterval(() => {this.showNext()},this.nextSlideDelay);
  }

}

