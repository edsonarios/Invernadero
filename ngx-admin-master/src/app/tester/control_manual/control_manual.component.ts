import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { fundido } from '../../animation';
@Component({
  selector: 'ngx-Tester-control_manual',
  styleUrls: ['./control_manual.component.scss'],
  templateUrl: './control_manual.component.html',
 animations: [fundido]
})
export class ControlManualComponent {

	
constructor(
		private router:Router,

		){

	
}
		
}