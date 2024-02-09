import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../types/Movie';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'BigCard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent implements OnInit{
  id: number|undefined
  @Input() movie?:Movie

  ngOnInit(): void {
    this.id=this.movie?.id
  }
}