import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MathsService } from 'src/services/maths.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  constructor(public _maths: MathsService) { }

  ngOnInit(): void {
    const myObs = new Observable(obs => {
      console.log('Start Observable');
      obs.next('100');
      obs.next('200');
     
      obs.error();
      console.log('End Observable');
    });

    myObs.subscribe(sub => {
      console.log(sub);
    },
    error => {
      console.log('error' +error);
    },
    () => {
      console.log('Completed');
    }
  )
  }

  

  increase(){
    this._maths.addOne();
  }

  SubjectParent: object = [
    {id: 1, name: 'Tamil'},
    {id: 2, name: 'English'},
    {id: 3, name: 'Maths'},
    {id: 4, name: 'Science'},
    {id: 5, name: 'Social'},
  ]

  items = ['item1'];

  addItem(newItem: string){
    this.items.push(newItem);
  }

  value= 'Hello Home';
  valueDate = new Date();

}
