import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from "../../data/dataFake"
import { Movie } from '../../types/Movie';

@Component({
  selector: 'ContentPage',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  id?: string|null
  movie?: Movie

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>
      this.id=value.get("id"))

    this.setValueToComponent(this.id)
  }

  setValueToComponent(id:string|null|undefined){
    this.movie=movies.filter(movie=>movie.id.toString()==id).shift()
    console.log(this.movie)
  }
}
