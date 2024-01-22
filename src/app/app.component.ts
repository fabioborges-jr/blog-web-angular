import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from './src/components/heading/heading.component';
import { TitleBannerComponent } from './src/components/title-banner/title-banner.component';
import { BigCardComponent } from './src/components/big-card/big-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadingComponent, TitleBannerComponent, BigCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog-web-angular';
}
