import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../types/Movie';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'SmallCard',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    RouterModule
  ],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent implements OnInit {
  @Input() movie?:Movie
  id: number | undefined
  
  ngOnInit(): void {
    this.id=this.movie?.id
  }
}

