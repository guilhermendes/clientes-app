import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService} from '../../clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {
  cliente!: Cliente;
  success:boolean = false;

  constructor(private service:ClientesService){
    this.cliente = new Cliente();
  }

  onSubmit(){
    this.service.salvar(this.cliente)
    .subscribe( response =>{
        //console.log(response);
        this.success = true;
     })
  }

}
