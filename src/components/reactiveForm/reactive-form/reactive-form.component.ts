import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl(''),
      'email': new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required)
    })
    
   
  }

  onSubmit(){
    console.log(this.userForm);
  }
  

}
