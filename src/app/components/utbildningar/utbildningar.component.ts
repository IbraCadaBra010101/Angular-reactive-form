import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {datumCustomValidation} from '../../validation';
import {startIntervall} from '../../utbildningsStarCustomValidation';

@Component({
  selector: 'app-utbildningar',
  templateUrl: './utbildningar.component.html',
  styleUrls: ['./utbildningar.component.css']
})
export class UtbildningarComponent implements OnInit {

  examenDatePattern = '^[0-9]{1,4}[:.,-]?$';

  inriktningsArray: Array<string> = [
    'Yrkeshögskola',
    'Universitet',
    'Högskola',
    'Gymnasium',
    'Grundutbildning'];

  utbildningsForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.utbildningsForm = this.fb.group({
      utbildning: this.fb.array([this.addUtbildningsGroup()])
    });
  }


  addUtbildningsGroup() {
    return this.fb.group({
      examen: ['', [Validators.required, datumCustomValidation]],
      start: ['', [Validators.required, startIntervall]],
      skola: ['', [Validators.required, Validators.minLength(5)]],
      program: [null, Validators.required],
    });
  }

//  age: new FormControl(null, [ageRangeValidator])

  get utbildningsArray() {
    return this.utbildningsForm.get('utbildning') as FormArray;
  }

  addUtbildning() {
    this.utbildningsArray.push(this.addUtbildningsGroup());
  }

  deleteUtbildning(i) {
    this.utbildningsArray.removeAt(i);
  }

}
