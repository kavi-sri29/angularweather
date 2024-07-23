import { Component, Input, OnInit } from '@angular/core';
import { MathsService } from 'src/services/maths.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[MathsService]
})
export class AboutComponent implements OnInit {
  @Input() subjectChild: any;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(public _aboutservice: MathsService) { }

  ngOnInit(): void {
  }

  addIncrement(){
    this._aboutservice.addOne();
  }

  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }

}
