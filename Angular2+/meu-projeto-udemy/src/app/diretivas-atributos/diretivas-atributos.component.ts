import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent {

  public valor: boolean = true;
  public heightPx: string = "20px";
  public backgroundColor: string = "green";

  ngOnInit(): void {

    setInterval( ()=>{
      if(this.valor){
        this.valor = false;
      } else {
        this.valor = true;
      }

      if(this.heightPx == "20px"){
        this.heightPx = "50px";
        this.backgroundColor = "blue"
      } else {
        this.heightPx = "20px";
        this.backgroundColor = "green"
      }
    }, 2000)

  }

}
