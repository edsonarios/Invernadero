import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

import { fundido } from '../../animation';
@Component({
  selector: 'ngx-Usuarios',
  styleUrls: ['./usuarios.component.scss'],
  templateUrl: './usuarios.component.html',
  providers: [UserService], 
  animations: [fundido]
})
export class UsuariosComponent implements OnInit {
public role=localStorage.getItem('role');
usuario;
hiddenUser='false';
hiddenAdmin='false';
admin;

constructor(
		private router:Router,
		private userService: UserService
		){

	
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

ngOnInit(){

	
		this.userService.obtenerUsuarios().subscribe(
			response =>{
				this.usuario=response;
				//console.log(this.usuario);
				if(this.usuario.length>0){
					this.hiddenUser='true';
				}
			},
			error =>{
				//console.log(<any>error)
			}
			);

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

ShowDetails(){
		this.router.navigate(['/pages/producto']);
}
AddUser(){
		this.router.navigate(['/pages/producto']);
	}
DetalleUsuario(id,correo,password){
	
	localStorage.setItem('admin_user_id',id);
	localStorage.setItem('admin_user_correo',correo);
	localStorage.setItem('admin_user_password',password);

	this.router.navigate(['/admin/details']);
	
}
}
