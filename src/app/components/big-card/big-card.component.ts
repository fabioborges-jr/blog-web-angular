import { Component, Input } from '@angular/core';
import { Movie } from '../../types/Movie';


@Component({
  selector: 'BigCard',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  @Input() movie!:Movie|undefined
}
