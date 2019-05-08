import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { fundido } from '../../animation';
@Component({
  selector: 'ngx-Administrador-reportes',
  styleUrls: ['./reportes.component.scss'],
  templateUrl: './reportes.component.html',
 animations: [fundido]
})
export class ReportesComponent {

	
constructor(
		private router:Router,

		){

	
}
		
}
