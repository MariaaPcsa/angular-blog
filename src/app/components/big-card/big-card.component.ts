import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";
  @Input()
  Id: string = "0";
  @Input()
  category: string = "Destaque";
  @Input()
  date: string = "";
  @Input()
  readTime: string = "";
  @Input()
  author: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
