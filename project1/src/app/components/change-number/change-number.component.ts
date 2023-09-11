import { Component, Output, EventEmitter } from '@angular/core';
//poderia ser criado só o Output se fosse apenas um dado.
@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()
  
  handleClick() {
    this.changeNumber.emit();
  }

}

// Evitar tipar tudo com <any> por boa prática.