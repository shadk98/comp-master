import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  openItemIndex = 0;
  @Input() items = [];

  constructor() { }

  ngOnInit() {
  }

  onClick(index: number){
    if(index===this.openItemIndex){
      this.openItemIndex = -1;
    }else{
      this.openItemIndex = index;
    }
    
  }
}
