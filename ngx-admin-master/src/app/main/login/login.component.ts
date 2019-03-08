import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

import { fundido } from '../../animation';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  providers: [UserService],
  animations: [fundido]
})
export class LoginComponent {
	public user: User;
	public identity;
	
constructor(
		private router:Router,
		private userService: UserService

		){}

	loginUser(e){ 
		e.preventDefault();
		var username=e.target.elements[0].value;
		var password=e.target.elements[1].value;
		this.user = new User('','','','','','','',username,password,'');
	//Obtenemos todo el valor de el usuario
		this.userService.SingUp(this.user).subscribe(
			response =>{
				this.identity=response;
				console.log(this.identity);
				localStorage.setItem('user_nombre',this.identity.result['nombre']);
				localStorage.setItem('user_paterno',this.identity.result['ap_paterno']);
				localStorage.setItem('user_id',this.identity.result['id']);
				localStorage.setItem('status','enable');
				
				if(this.identity.result['tipo']=='user')
					{
					localStorage.setItem('role','user');

					this.router.navigate(['/pages/producto']);
					}
				else{
					if(this.identity.result['tipo']=='root'){
					localStorage.setItem('role','root');
					this.router.navigate(['/admin/user']);
					}
					else
					{
					localStorage.setItem('role','admin');
					
					this.router.navigate(['/admin/user']);
					}
				}			
			

			},
			error =>{

			}
		)
		
		
		localStorage.setItem('route','producto');

		}
		

	
}
