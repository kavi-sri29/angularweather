import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() { }

  bookId: number = 67;
  bookName: string = 'Thulazi';
  author: string = 'Balakumaran';
  bookStatus: string = 'Available';
  btnToggle: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.btnToggle = false;
    },5000);
  }

  onToggle(){
    if(this.bookStatus == 'Available'){
      this.bookStatus = 'Not Available';
    }
    else{
      this.bookStatus = 'Available';
    }
  }


}
