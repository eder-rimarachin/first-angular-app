import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  // template: '<h1> Hola mundo sss</h1>'
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})

export class componenteComponent implements OnInit {

  name: string;
  urlImg: string;
  text: string;
  isDisabled: boolean;
  sheName: string;
  title: string;


  constructor() {
    this.name = '';
    this.urlImg = 'https://ebierzo.es/wp-content/uploads/2021/12/witcher-ciri.jpg';
    this.text = 'Escribe aquí tu texto';
    this.isDisabled = true;
    this.sheName = 'Cirila of Cintra';
    this.title = 'Eder Olmedo';
  }



  ngOnInit(): void { }

  getName(): string { return this.name = 'Joaquin'; }

  // getImage(): string { return this.urlImg = 'https://ebierzo.es/wp-content/uploads/2021/12/witcher-ciri.jpg'; }

  disabled(): void { this.isDisabled = !this.isDisabled; }
}
