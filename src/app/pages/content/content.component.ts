import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ContentPage',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
