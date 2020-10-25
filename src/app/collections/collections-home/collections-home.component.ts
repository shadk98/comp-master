import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data= [
    {name:'Alice', age: '26', job: 'Designer'},
    {name:'Mango', age: '22', job: 'Builder'},
    {name:'Gauva', age: '24', job: 'Engineer'},
    {name:'Apple', age: '20', job: 'Engineer'}
  ];

  headers= [
    {key:'name', label: 'Name'},
    {key:'age' , label: 'Age'},
    {key:'job' , label: 'Job'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
