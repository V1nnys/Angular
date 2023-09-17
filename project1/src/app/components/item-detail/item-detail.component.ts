import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  animal?: Animal; //? significa que a vinda do 'animal' é opcional.

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal()
  }

  ngOnInit(): void{}

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id")) //O que vem string agora será Number.
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
