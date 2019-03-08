import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importando los servicios

import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-user-ajust',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './ajustes.component.html',
  providers: [UserService],
  animations: [fundido]
})
export class AjustesComponent {
 public user: User;
 public usertemp: User;
 public identity;

constructor(
		private router:Router,
		private userService: UserService
		){}

ngOnInit(){

	console.log('se ha cargado la pagina de ajustes');

}
volver(){
this.router.navigate(['/pages/profile']);


}
actualizarPass(e){
	console.log('Actualizando');
	e.preventDefault();
		var PasswordOld=e.target.elements[0].value;
		var passwordNew=e.target.elements[1].value;
		var passwordNewRepeat=e.target.elements[2].value;



		
	
	this.user = new User(localStorage.getItem('user_id'),'','','','','','','','','');
  	//Obtenemos todo el valor de el usuario
  	this.userService.detalleUsuario(this.user).subscribe(
      response =>{
        this.identity=response;
        console.log(this.identity);

        if(this.identity[0]['password']==PasswordOld){
        	if(passwordNew==passwordNewRepeat)
		{
			
			this.usertemp = new User(localStorage.getItem('user_id'),'','','','','','','',passwordNew,'');
			//console.log('HABILITADO PARA CAMBIAR LA CONTRASEÑA');

			 this.userService.cambiarPassword(this.usertemp).subscribe(
      			response =>{
       			
        		console.log(response);
       			
         },
      error =>{
        console.log(<any>error);
      }
    )

		}
        }
        
   				
       
      },
      error =>{
        
      }
    );
    this.router.navigate(['/pages/producto']);
}

}
