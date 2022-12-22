import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientesService } from '../../clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent {

  clientes: Cliente[] = [];

  constructor(
    private service: ClientesService, private router:Router){

    this.service
    .getClientes()
    .subscribe(
      resposta => this.clientes = resposta
    );

  }

  novoCadastro(){
    this.router.navigate(['/clientes-form']);
  }




}


