import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {movies} from "../../data/dataFake"

@Component({
  selector: 'ContentPage',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  id?: string|null

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>
      this.id=value.get("id"))

    this.setValueToComponent(this.id)
  }

  setValueToComponent(id:string|null|undefined){
    const movie=movies.filter(movie=>movie.id.toString()==id)
    console.log(movie)
  }

}
