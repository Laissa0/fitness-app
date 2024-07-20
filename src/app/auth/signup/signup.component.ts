import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  maxDate: Date;

  constructor() { }

  ngOnInit() {
    this.maxDate = new Date();
    // getFullYear returns the year of the specified date according to local time
    // setFullYear sets the full year for a specified date according to local time
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }


  onSubmit(form: NgForm) {
    console.log('You have signed up!', form);
  }

}
