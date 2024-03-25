import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { SwiperDirective } from '../../directives/swiper.directive';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { Swiper, SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, SwiperDirective],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageSliderComponent {
  @Input({ required: true }) images: string[] = [];
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  public currentImage = 0;

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    on: {
      touchMove: (swiper: Swiper, event) => {
        event.stopPropagation();
      },
      touchStart: (swiper: Swiper, event) => {
        event.stopPropagation();
      },
      touchEnd: (swiper: Swiper, event) => {
        event.stopPropagation();
      },
      touchMoveOpposite: (swiper: Swiper, event) => {
        event.stopPropagation();
      },
    },
  };

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.onAny((eventName, ...args) => {
      if (eventName === 'slideChange') {
        this.currentImage = this.swiper.nativeElement.swiper.realIndex;
      }
    });
  }

  constructor() {
    register();
  }

  slideTo(index: number) {
    this.swiper.nativeElement.swiper.slideTo(index);
    this.currentImage = index;
  }
}
