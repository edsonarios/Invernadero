import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { fundido } from '../../animation';
@Component({
  selector: 'ngx-Tester-horarios',
  styleUrls: ['./horarios.component.scss'],
  templateUrl: './horarios.component.html',
 animations: [fundido]
})
export class HorariosComponent {

	
constructor(
		private router:Router,

		){

	
}
		
}