import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  openModal = false;
  items = [
    {title: 'Why is sky blue?', content:'The sky is blue because it is.'},
    {title: 'Where do you live?', content:'I live on a beautiful planet called Earth.'},
    {title: 'What are you learnig?', content:'I am learning a interesting framework Angular.'}
  ];
 
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.openModal= !this.openModal;
  }

 
}
