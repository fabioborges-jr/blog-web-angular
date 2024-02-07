import { Component, Input } from '@angular/core';
import { Movie } from '../../types/Movie';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'SmallCard',
  standalone: true,
  imports: [
    NgFor,
    FormsModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input() movie?:Movie
}
