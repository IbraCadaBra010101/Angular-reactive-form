import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tidigare-arbetsgivare',
  templateUrl: './tidigare-arbetsgivare.component.html',
  styleUrls: ['./tidigare-arbetsgivare.component.css']
})
export class TidigareArbetsgivareComponent implements OnInit {


  branchArray: Array<string> = ['IT', 'Bygg',
    'Hotell och Restaurang', 'Detaljehandel', 'Industri', 'Övrigt'];

  arbetsgivareForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.arbetsgivareForm = this.fb.group({
      ag: this.fb.array([this.agGroup()])
    });
  }


  agGroup() {
    return this.fb.group({
      foretag: [null, Validators.required],
      roll: [null, Validators.required],
      antalAr: [null, Validators.required],
      bransch: [null, Validators.required],
    });
  }


  get agArray() {
    return this.arbetsgivareForm.get('ag') as FormArray;
  }

  addAg() {
    this.agArray.push(this.agGroup());
  }

  delAg(i) {
    this.agArray.removeAt(i);
  }
}

