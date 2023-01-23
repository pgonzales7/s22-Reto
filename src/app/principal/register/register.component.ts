import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname:string=""
  lastname:string=""
  username:string=""
  password:string=""
  enviado=false;
  
  constructor() { }
    EnviarMensaje(){
      alert('Registro: ' + '\n ha sido enviado');
      this.enviado = true;
    }
  SalirDeRuta():Observable<boolean> | boolean{
    

    if ((this.firstname != "" || this.lastname != ""|| this.username != ""|| this.password != "") &&  !this.enviado) {
      const confirmar = confirm("¿Desea salir del Registro? \n Perderá todos los datos!!");
      return confirmar;
  }

  return true;
  }
}
