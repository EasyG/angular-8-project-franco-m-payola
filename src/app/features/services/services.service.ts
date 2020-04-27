import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  private endpoint = `${environment.USER_URL}/users`;

  //Es un tipo de consulta HTTP utilizado en las clases de tipo injectable
  constructor( private http: HttpClient) {

   }

  getAllUsers() {
    return this.http.get(this.endpoint);
  }

 getUserById(id: number) {
    const url = `${this.endpoint}/${id}`;
    return this.http.get(url);
  }
}

