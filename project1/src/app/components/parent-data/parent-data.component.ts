import { Component} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  name = 'Vini';
  email = 'vinicius@angular.com';
  role = 'programmer';
}
