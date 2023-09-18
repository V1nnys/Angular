import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }
  
  //É preciso saber o ID para remover o animal
  remove(id: Number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
}

/*
        {"id": 1, "name": "Turca", "type": "Dog",   "age": 4 },
        {"id": 2, "name": "Tom",   "type": "Cat",   "age": 10 },
        {"id": 3, "name": "Frida", "type": "Dog",   "age": 11 },
        {"id": 4, "name": "Bob",   "type": "Horse", "age": 2 },
        {"id": 5, "name": "Paco",  "type": "Bird",  "age": 1 }
*/
