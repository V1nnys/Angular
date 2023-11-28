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
}
