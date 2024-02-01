import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { TitleBannerComponent } from '../../components/title-banner/title-banner.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { movies } from "../../data/dataFake"
import { Movie } from '../../types/Movie';

@Component({
  selector: 'HomePage',
  standalone: true,
  imports: [
    HeadingComponent,
    TitleBannerComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  movieBigCard:Movie|undefined=movies.shift()
  // moviesSmallCards:Movie[]=movies.splice()
}
