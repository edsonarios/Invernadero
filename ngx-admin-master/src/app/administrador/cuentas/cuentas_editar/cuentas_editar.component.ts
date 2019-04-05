import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importar los servicios
import { User } from '../../../../model/user';
import { UserService } from '../../../../service/user.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-cuentas-editar',
  styleUrls: ['./cuentas_editar.component.scss'],
  templateUrl: './cuentas_editar.component.html',
  providers: [UserService],
   animations: [fundido]
})
export class CuentasEditarComponent {
public user: User;
  public identity;
 
  //datos de el usuario
  public nombre;
  public ap_paterno;
  public ap_materno;
  public direccion;
  public telefono;
  public correo;
  public password;
  public role;
  public conectado;
  
	
constructor(private router:Router,
    private userService: UserService){	

	this.user = new User(localStorage.getItem('admin_user_id'),'','','','','','','','','','');
//console.log(this.user);
  //Obtenemos todo el valor de el usuario
  this.userService.detalleUsuario(this.user).subscribe(
      response =>{
        this.identity=response;
        //console.log(this.identity);

        this.nombre=this.identity[0]['nombre'];
        this.ap_paterno=this.identity[0]['ap_paterno'];
        this.ap_materno=this.identity[0]['ap_materno'];
        this.direccion=this.identity[0]['direccion'];
        this.telefono=this.identity[0]['telefono'];
        this.correo=this.identity[0]['correo'];
        this.password=this.identity[0]['password'];
        this.role=this.identity[0]['tipo'];
        this.conectado=this.identity[0]['conectado']

      },
      error =>{
        
      }
    )
}

editUser(e){

  e.preventDefault();
  var nombre =e.target.elements[0].value;
  var ap_paterno =e.target.elements[1].value;
  var ap_materno =e.target.elements[2].value;
  var direccion =e.target.elements[3].value;
  var telefono =e.target.elements[4].value;
  var correo =e.target.elements[5].value;
  var password =e.target.elements[6].value;
   
this.user = new User(localStorage.getItem('admin_user_id'),nombre,ap_paterno,ap_materno,'user',direccion,telefono,correo,password,this.conectado,'');

    this.userService.editarUser(this.user).subscribe(
      response =>{
        this.user = response.user;
      },
      error =>{
        console.log(<any>error)
      }
    );

     this.router.navigate(['/Administrador/Cuentas/Detalle']);
     
  }
	volver(){
      this.router.navigate(['/Administrador/Cuentas/Detalle']);
}

}
