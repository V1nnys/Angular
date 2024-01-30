import { Component, OnInit, DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked } from '@angular/core';

/*
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked

<app-title *ngIf="destruir"></app-title>
    {{valor}}
    <button (click)="adicionar()">Adicionar</button>
    <button (click)="destruirComponent()">Destruir componente</button>

    <app-diretivas-estruturais></app-diretivas-estruturais>

    <app-diretivas-atributos></app-diretivas-atributos>
    <router-outlet></router-outlet>
    
    */
   
   @Component({
     selector: 'app-root',
     template: `
    <app-data-binding></app-data-binding>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-diretivas-atributos></app-diretivas-atributos>
    <router-outlet></router-outlet>
  `

})
export class AppComponent implements OnInit {

  public valor: number = 1;
  
  constructor() {}

  public adicionar(): number{
    return this.valor += 1;
  }

  ngOnInit(): void {};

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

  public destruir: boolean = true;

  public destruirComponent() {
    this.destruir = false;
  }

}
