import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  enviado=false;

  //para el formulario
    constructor(private formBuilder: FormBuilder) { }

  registroForm = this.formBuilder.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      username:['', Validators.required],
      password:['', Validators.required]
  })

  get firstname(){return this.registroForm.get('firstname')}
  get lastname(){return this.registroForm.get('lastname')}
  get username(){return this.registroForm.get('username')}
  get password(){return this.registroForm.get('password')}


  datos = new Array();
  Enviar(){
    this.datos.push({
    'FirstName' : this.registroForm.get('firstname')?.value,
    'LastName' : this.registroForm.get('lastname')?.value,
    'Username' : this.registroForm.get('username')?.value,
    'Password' : this.registroForm.get('password')?.value,
    })
    alert('Mensaje: '+`Nombre: ${this.firstname?.value}
    Apellido: ${this.lastname?.value} Usuario: ${this.username?.value} Password: ${this.password?.value}`);
    this.enviado=true;
  }

  nombre=this.firstname?.value;
  apellido=this.lastname?.value;
  usuario=this.username?.value;
  contraseña=this.password?.value;


  SalirDeRuta(): Observable<boolean> | boolean{
    
    if(!this.nombre==undefined && !this.apellido==undefined && !this.usuario==undefined && !this.contraseña==undefined || this.enviado ){
      return true;
    }

      let confirmar = confirm("¿Desea abandonar el formulario? \n Perdera todos los datos!!");
      return confirmar;
    }

}
