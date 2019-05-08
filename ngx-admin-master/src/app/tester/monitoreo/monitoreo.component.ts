import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { fundido } from '../../animation';
@Component({
  selector: 'ngx-Tester-monitoreo',
  styleUrls: ['./monitoreo.component.scss'],
  templateUrl: './monitoreo.component.html',
 animations: [fundido]
})
export class MonitoreoComponent {

	
constructor(
		private router:Router,

		){

	
}
		
}