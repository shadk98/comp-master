import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  personalInfoForm = new FormGroup({
    personName: new FormControl(''),
    fatherName: new FormControl(''),
    motherName: new FormControl(''),
    gaurdianName: new FormControl(''),
    dob: new FormControl(''),
    nationality: new FormControl(''),
    domicileCode: new FormControl(''),

  })

  constructor() { }

  ngOnInit() {
  }

}
