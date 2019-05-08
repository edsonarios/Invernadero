import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { fundido } from '../../animation';
@Component({
  selector: 'ngx-usuario-reporte',
  styleUrls: ['./reporte.component.scss'],
  templateUrl: './reporte.component.html',
 animations: [fundido]
})
export class ReporteComponent {

	
constructor(
		private router:Router,

		){

	
}
		
}
