import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { fundido } from '../../animation';
@Component({
  selector: 'ngx-usuario-reporte',
  styleUrls: ['./reporte.component.scss'],
  templateUrl: './reporte.component.html',
      providers: [UserService],
 animations: [fundido]
})
export class ReporteComponent {
notifications;
public user: User;

constructor(
		private router:Router,
private userService: UserService,
		){
/*this.user = new User(localStorage.getItem('user_id'),'','','','','','','','','','');
 this.userService.Notifications(this.user).subscribe(
      response =>{
        this.notifications=response;
        console.log("estas son las notificaciones del usuario ID: "+localStorage.getItem('user_id'));
        console.log(this.notifications);
      },
      error =>{
        
      }
    );*/
}
		
}
