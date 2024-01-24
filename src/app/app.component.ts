import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from '../components/heading/heading.component';
import { TitleBannerComponent } from '../components/title-banner/title-banner.component';
import { BigCardComponent } from '../components/big-card/big-card.component';
import { SmallCardComponent } from '../components/small-card/small-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadingComponent, TitleBannerComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog-web-angular';
}
