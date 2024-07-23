import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DbserviceService } from 'src/services/dbservice/dbservice.service';


interface Book {
  bookname: string;
  author: string;
}

@Component({
  selector: 'app-dbcon',
  templateUrl: './dbcon.component.html',
  styleUrls: ['./dbcon.component.css'],
  providers:[DbserviceService]
})
export class DbconComponent implements OnInit {

  constructor(private _book: DbserviceService) { }
  
  bForm!: FormGroup;
  ngOnInit(): void {
    this.bForm = new FormGroup({
      'bname' : new FormControl(''),
      'bauthor': new FormControl('')
    })
  }
  myBooks: Book[]  = [];
  onSubmitItems(){
    const bookname = this.bForm.get('bname')?.value;
    const author  = this.bForm.get('bauthor')?.value;
    this.myBooks.push({
       bookname,
       author
    })
    console.log(this.myBooks);
    this._book.saveBook(this.myBooks)
    .subscribe(sub => {
      console.log(sub);
    },
    error => {
      console.log(error);
    }
  )
  }



}
