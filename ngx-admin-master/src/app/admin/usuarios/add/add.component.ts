import { Component} from '@angular/core';
import { Router } from '@angular/router';
//importar servicio, 
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-admin-add',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './add.component.html',
  providers: [UserService],
   animations: [fundido]
})
export class AddUsuarioComponent {
	public role =localStorage.getItem('role');
	public user: User;


	constructor(private router:Router,
		private userService: UserService
		){
		if (localStorage.getItem('role')=='root') {
			this.user = new User('','','','','','','','','','');
		}
		else{
			this.user = new User('','','','','user','','','','','');
		}
		console.log('Se ha cargado la pagina');
		
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
    	this.router.navigate(['/admin/user']));
    	
	
	}
	volver(){
      this.router.navigate(['/admin/user']);
}
}
