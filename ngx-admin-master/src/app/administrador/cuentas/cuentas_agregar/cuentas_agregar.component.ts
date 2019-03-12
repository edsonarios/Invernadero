import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importar servicio, 
import { User } from '../../../../model/user';
import { UserService } from '../../../../service/user.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-cuentas-agregar',
  styleUrls: ['./cuentas_agregar.component.scss'],
  templateUrl: './cuentas_agregar.component.html',
  providers: [UserService],
  animations: [fundido]
 
})
export class CuentasAgregarComponent {
public role =localStorage.getItem('role');
public user: User;
	
constructor(private router:Router,
		private userService: UserService){	
	if (localStorage.getItem('role')=='root') {
			this.user = new User('','','','','','','','','','');
		}
		else{
			this.user = new User('','','','','user','','','','','');
		}
}
onSubmit(){
		console.log(this.user);
		this.user.conectado='false';
		
		this.userService.register(this.user).subscribe(
			response =>{
				this.user = response.user;
			},
			error =>{
				console.log(<any>error)
			}
		)
		this.router.navigateByUrl('/add', {skipLocationChange: true}).then(()=>
    	this.router.navigate(['/Administrador/Cuentas/Usuarios']));
    	
	
	}
	volver(){
      this.router.navigate(['/Administrador/Cuentas/Usuarios']);
}

}
