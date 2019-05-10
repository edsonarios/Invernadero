import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { fundido } from '../../animation';
@Component({
  selector: 'ngx-Administrador-reportes',
  styleUrls: ['./reportes.component.scss'],
  templateUrl: './reportes.component.html',
    providers: [UserService],
 animations: [fundido]
})
export class ReportesComponent {
notifications;
	
constructor(
		private router:Router,
 private userService: UserService,
		){
	console.log("entra al coso");
 this.userService.Notifications(localStorage.getItem('user_id')).subscribe(
      response =>{
        this.notifications=response;
        console.log("estas son las notificaciones del usuario ID: "+localStorage.getItem('user_id'));
        console.log(this.notifications);
      },
      error =>{
        
      }
    );
	
}
		
}
