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

  getCliente() : Cliente{
    let cliente:Cliente = new Cliente();
    cliente.nome = 'Guilherme Campos Mendes';
    cliente.cpf = '123456789';
    return cliente;
  }
}
