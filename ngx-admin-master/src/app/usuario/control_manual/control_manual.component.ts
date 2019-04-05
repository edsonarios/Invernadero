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

	TempMax=30;
	TempMedia=20;
	TempMin=10;
	Bomba_Agua=[{}];
	Ventanas=[{}];
	Ventiladores=[{}];
	Puertas=[{}];


constructor(
		private router:Router,

		){

	
}
BtnCtrlTemp(btn,acction){
	if (btn=='Max') {
		if(acction=="Up"){
			this.TempMax=this.TempMax+1;
		}
		else{
			if(this.TempMax>this.TempMedia+1){
			this.TempMax=this.TempMax-1;
		}
		}
	}
	if (btn=='Media') {
		if(acction=="Up"){
			if (this.TempMedia<this.TempMax-1) {
				this.TempMedia=this.TempMedia+1;
			}
		}
		else{
			if (this.TempMedia>this.TempMin+1) {
				this.TempMedia=this.TempMedia-1;
			}
			
		}
	}
	
	if (btn=='Min') {
		if(acction=="Up"){
			if (this.TempMin<this.TempMedia-1) {
				this.TempMin=this.TempMin+1;
			}
			
		}
		else{
			this.TempMin=this.TempMin-1;
		}
	}
	
}

		
}