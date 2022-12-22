import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, TitleStrategy, Params } from '@angular/router'
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
  errors!: String[];
  id:number =0;

  constructor(
    private service:ClientesService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ){

    this.cliente = new Cliente();

    let params = activatedRoute.snapshot.params;

    if(params && params["id"]){
      this.id = activatedRoute.snapshot.params["id"];
      this.service
      .getClientesById(this.id)
      .subscribe(
        response => this.cliente = response,
        errorResponse => this.cliente = new Cliente()
        )
    }


  }

  onSubmit(){
    this.service
    .salvar(this.cliente)
    .subscribe( response =>{
        this.success = true;
        this.errors = [];
        this.cliente = response
     }, errorResponse =>{
      this.success = false;
       this.errors = errorResponse.error.errors;
     }
     )
  }

  voltarParaListagem(){
    this.router.navigate(['/clientes-lista'])
  }

}
function value(value: any, arg1: (ParamMap: any) => void) {
  throw new Error('Function not implemented.');
}

