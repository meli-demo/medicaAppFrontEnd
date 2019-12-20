import { Injectable } from '@angular/core';
import { HOST, TOKEN_NAME } from '../_shared/var.constants';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../_model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url: string = `${HOST}/menus`;

  menuCambio = new BehaviorSubject<string>('primervalor');

  menuValorReactivo = new BehaviorSubject<Menu[]>(new Array<Menu>());

  //inyeccion de dep
  constructor(private http: HttpClient) {}

  listar() {
    this.menuCambio.next('consultó servicio');
    let token = sessionStorage.getItem(TOKEN_NAME);
    return this.http.get<Menu[]>(`${this.url}`, {
      headers: new HttpHeaders()
        .set('Authorization', `bearer ${token}`)
        .set('content-type', 'application/json')
    });
  }

  listarPorUsuario(username:string) {
    let token = sessionStorage.getItem(TOKEN_NAME);
    return this.http.post<Menu[]>(`${this.url}/usuario`,username, {
      headers: new HttpHeaders()
        .set('Authorization', `bearer ${token}`)
        .set('content-type', 'application/json')
    });
  }
}
