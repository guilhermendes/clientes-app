import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  loginError!: boolean;
  cadastrando!: boolean;
  mensagemSucesso!:string;
  errors!: string[];

  constructor(
    private router: Router,
    private authService: AuthService
  ){

  }

  onSubmit(){
    this.authService
      .tentarLogar(this.username, this.password)
      .subscribe(response => {
          const access_token = JSON.stringify(response);
          localStorage.setItem('access_token', access_token);
          this.router.navigate(['/home']);
      }, errorResponse => {
          this.errors = ['Usuário e/ou senha incorreto(s).']
      })
  }

  preparaCadastrar($event: { preventDefault: () => void; }){
    $event.preventDefault()
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
      .salvar(usuario)
      .subscribe( response => {
          this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
          this.cadastrando = false;
          this.username = '';
          this.password = '';
          this.errors = [];
       }, errorResponse => {
          this.mensagemSucesso = '';
          this.errors = errorResponse.error.errors;
       })
  }

}
