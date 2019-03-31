import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  erfarenHetList: Array<string> = ['mindre än 6 månader',
    'mer än 6 månader', 'mer än 1 år', 'mer än 2 år',
    'mer är än 5 år', 'mer än 10 år'];
  gillarLista: Array<string> = ['Trivsamt',
    'Hobby', 'Passion',
    'älskar det!', 'pays the bills'];
  levelsList: Array<string> = ['Javascript',
    'HTML', 'CSS',
    'Googla saker', 'Städa',
    'Brygga kaffe', 'Angular',
    'React', 'Skylla ifrån sig',
    'Ta andras öl'];
  kompetensRatingList: Array<string> = ['Mushroom', 'Beginner',
    'Intermediate', 'Expert'];

  kompForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.kompForm = this.fb.group({
      komp: this.fb.array([this.kompGroup()])
    });
  }

  kompGroup() {
    return this.fb.group({
      risRos: [null, Validators.required],
      kompetens: [null, Validators.required],
      rating: [null, Validators.required],
      erfarenhet: [null, Validators.required],
    });
  }


  get kompArray() {
    return this.kompForm.get('komp') as FormArray;
  }

  addKomp() {
    this.kompArray.push(this.kompGroup());
  }

  delKomp(i) {
    this.kompArray.removeAt(i);
  }


}
