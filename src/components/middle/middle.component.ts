import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newBooks=null
  items = [
    { name: 'Item 1', description: 'Description 1', price: 10, status: 'Available' },
    { name: 'Item 2', description: 'Description 2', price: 20, status: 'Available' },
    { name: 'Item 3', description: 'Description 3', price: 30, status: 'Not Available' },
    { name: 'Item 4', description: 'Description 4', price: 40, status: 'Available' }
  ];
  card: any = [1,2,3,4,5];


}
