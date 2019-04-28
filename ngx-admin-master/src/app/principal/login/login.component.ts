import { Component , AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';


import { fundido } from '../../animation';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  providers: [UserService],
 	animations: [fundido]
})
export class LoginComponent implements AfterViewInit{
public user: User;
	public identity;
	public status: string;
	
constructor(
		private _userService:UserService,
		private router:Router,
		){

}
ngAfterViewInit(){
	window.scrollTo(0, 0);
}
Login(e){
	e.preventDefault();
	var username=e.target.elements[0].value;
	var password=e.target.elements[1].value;

	//Convierte todo a minusculas
	username= username.toLowerCase();
	password= password.toLowerCase();

	this.user = new User('','','','','','','',username,password,'','');

	
	//obtenemos todo el valor de el usuario
	
	this._userService.SingUp(this.user).subscribe(
			response =>{	

				this.identity=response;
				
				localStorage.setItem('nombre',this.identity.result['nombre']+" "+this.identity.result['ap_paterno']+" "+this.identity.result['ap_materno']);
				localStorage.setItem('user_id',this.identity.result['id']);
				localStorage.setItem('status','enable');
				
				if(this.identity.result['tipo']=='user')
					{
					localStorage.setItem('role','user');

					this.router.navigate(['/Usuario/Dashboard']);
					}
				if(this.identity.result['tipo']=='root'){
					localStorage.setItem('role','root');
					this.router.navigate(['/Administrador/Cuentas/Usuarios']);
					}

				if(this.identity.result['tipo']=='admin'){
					localStorage.setItem('role','admin');
					
					this.router.navigate(['/Administrador/Cuentas/Usuarios']);
				}
				if(this.identity.result['tipo']=='tester'){
					localStorage.setItem('role','tester');
					
					this.router.navigate(['/Tester/Cuentas']);
				}
					
			

			},
			error =>{
			
			this.status='denied'
			window.alert("Denegado");

			}
		)
}	

	
}
