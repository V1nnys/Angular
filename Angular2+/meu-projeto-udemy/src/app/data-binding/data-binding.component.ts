import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  public nome: string = "Vinis";
  public idade: number = 34;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://images.app.goo.gl/RXYS1bdYFyZVJj2i8";
  public imgTitle: string = "property Binding";

  public position: { x: number, y: number } = { x: 0, y: 0 }
  //public position: any;
  constructor() {}

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
