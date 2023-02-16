import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  apiUrl:string = environment.apiUrlBase + '/api/clientes';

  constructor(private http:HttpClient) {

  }
  salvar(cliente:Cliente) : Observable<Cliente> {

    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString!)

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token.access_token
    });

    return this.http.post<Cliente>(`${this.apiUrl}`, cliente, { headers });
  }

  atualizar(cliente:Cliente) : Observable<any> {
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString!)

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token.access_token
    });

    return this.http.put<Cliente>(`${this.apiUrl}/${cliente.id}`, cliente , { headers });
  }

  getClientes() : Observable<Cliente[]>{

    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString!)

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token.access_token
    });

    return this.http.get<Cliente[]>(this.apiUrl, { headers });
  }

  getClientesById(id: number) :Observable<Cliente>{
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString!)

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token.access_token
    });


    return this.http.get<any>(`${this.apiUrl}/${id}` , { headers });

  }

  deletar(cliente:Cliente) : Observable<any> {
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString!)

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token.access_token
    });


    return this.http.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`, { headers });
  }

}
