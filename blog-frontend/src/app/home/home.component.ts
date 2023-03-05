import {Component} from '@angular/core'
import {Slide} from "../interfaces/slide";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {

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


}

