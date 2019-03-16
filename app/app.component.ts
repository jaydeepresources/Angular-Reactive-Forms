import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) {

  }

  formSubmit() {
    console.log(this.profileForm)
  }

}