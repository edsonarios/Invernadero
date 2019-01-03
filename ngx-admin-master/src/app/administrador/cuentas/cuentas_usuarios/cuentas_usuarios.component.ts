import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../service/user.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-cuentas-usuarios',
  styleUrls: ['./cuentas_usuarios.component.scss'],
  templateUrl: './cuentas_usuarios.component.html',
  providers: [UserService], 
  animations: [fundido]
})
export class CuentasUsuariosComponent {
public role=localStorage.getItem('role');
public usuario;
public hiddenUser='false';
public hiddenAdmin='false';
public admin;

	
constructor(private router:Router,
	private userService: UserService){	

	localStorage.removeItem('admin_user_correo');
	localStorage.removeItem('admin_user_id');
	localStorage.removeItem('admin_user_password');


	if (localStorage.getItem('role')=='root') {
		this.userService.obtenerAdmins().subscribe(
			response =>{
				this.admin=response;
				//console.log(this.admin);
				if(this.admin.length>0){
					this.hiddenAdmin='true';
				}
			},
			error =>{
				//console.log(<any>error)
			}
			);
	}

	this.userService.obtenerUsuarios().subscribe(
			response =>{
				this.usuario=response;
				//console.log(this.usuario);
				if(this.usuario.length>0){
					this.hiddenUser='true';
				}
			},
			error =>{
				console.log(<any>error)
			}
			);

}

AddUser(){
		this.router.navigate(['/Administrador/Cuentas/Agregar']);
	}
DetalleUsuario(id,correo,password){
	
	localStorage.setItem('admin_user_id',id);
	localStorage.setItem('admin_user_correo',correo);
	localStorage.setItem('admin_user_password',password);

	this.router.navigate(['/Administrador/Cuentas/Detalle']);
	
}
EnviarMensaje(id,correo){
	localStorage.setItem('admin_user_id',id);
	localStorage.setItem('admin_user_correo',correo);

	this.router.navigate(['/Administrador/Mensajes/Escribir']);
}

}
