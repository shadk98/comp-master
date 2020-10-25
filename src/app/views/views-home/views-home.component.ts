import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {value: 22, label: '# of Users'},
    {value: 900, label: 'Revenues'},
    {value: 50, label: 'Review'}
  ];

  itemsList = [
    {
      image: '/assets/images/couch.jpeg', 
      header: 'A Couch',
      desc: 'This is a great piece of couch to sit on' 
    },
    {
      image: '/assets/images/dresser.jpeg', 
      header: 'A Dresser',
      desc: 'This is a very nice dresser for bedroom' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
