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
public Usuarios=[];
public Administradores=[];
public Testers=[];

public hiddenUser='false';
public hiddenAdmin='false';
public hiddenTester='false';

constructor(private router:Router,
	private userService: UserService){	

	localStorage.removeItem('admin_user_correo');
	localStorage.removeItem('admin_user_id');
	localStorage.removeItem('admin_user_password');

	if (localStorage.getItem('role')=='root') {
		this.userService.obtenerAdmins().subscribe(
			response =>{
				this.Administradores=response;
				//console.log(this.admin);
				if(this.Administradores.length>0){
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
				this.Usuarios=response;
				//console.log(this.Usuarios);
				if(this.Usuarios.length>0){
					this.hiddenUser='true';
				}
			},
			error =>{
				console.log(<any>error)
			}
			);

	this.userService.obtenerTesters().subscribe(
			response =>{
				this.Testers=response;
				//console.log(this.Testers);
				if(this.Testers.length>0){
					this.hiddenTester='true';
				}
			},
			error =>{
				console.log(<any>error)
			}
			);

}


DetalleUsuario(id){
	localStorage.setItem('admin_user_id',id);
	

	this.router.navigate(['/Administrador/Cuentas/Detalle']);
	
}


}
