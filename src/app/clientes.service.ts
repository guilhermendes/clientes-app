import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) {

  }
  salvar(cliente:Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  getClientesById(id: number) :Observable<Cliente>{
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);

  }

  /*getClientes() : Cliente[]{
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = "Gulherme Campos ";
    cliente.cpf = "00000000";
    cliente.dataCadastro = "8/08/1985";
    return [cliente];
  }*/
}
