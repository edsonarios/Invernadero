import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { fundido } from '../../animation';
@Component({
  selector: 'ngx-Tester-notificaciones',
  styleUrls: ['./notificaciones.component.scss'],
  templateUrl: './notificaciones.component.html',
 animations: [fundido]
})
export class NotificacionesComponent {

	
constructor(
		private router:Router,

		){

	
}
		
}