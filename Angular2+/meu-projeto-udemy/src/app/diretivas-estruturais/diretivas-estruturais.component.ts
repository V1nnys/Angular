import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Lorem Ipsum", idade: 99 },
    { nome: "Silor Dolor", idade: 98},
    { nome: "Amet meno", idade: 97}
  ];

  public nome: string = 'dener';
  constructor() {}

  ngOnInit(): void {

    setInterval( ()=>{
      if(this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      }
    },2000)

  }

  public onClick() {
    if(this.conditionClick){
      this.condition = false;
    }else{
      this.condition = true;
    }
  }

  public onClickAddList() {
    this.list.push({nome: "Elita", idade: 34});
  }

  public onCLickEventList(event: number) {
    
    this.list.splice(event, 1)

  }
}
