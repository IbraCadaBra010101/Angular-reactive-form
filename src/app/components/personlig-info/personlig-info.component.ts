import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-personlig-info',
  templateUrl: './personlig-info.component.html',
  styleUrls: ['./personlig-info.component.css']
})
export class PersonligInfoComponent implements OnInit {
   addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addressForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      mail: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
    });
  }

  get mail() {
    return this.addressForm.get('mail');
  }

  get firstName() {
    return this.addressForm.get('firstName');
  }

  get lastName() {
    return this.addressForm.get('lastName');
  }

  get city() {
    return this.addressForm.get('city');
  }

  get description() {
    return this.addressForm.get('description');
  }

}
