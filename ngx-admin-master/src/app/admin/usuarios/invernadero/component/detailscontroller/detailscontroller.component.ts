import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { fundido } from '../../../../../animation';
@Component({
  selector: 'ngx-admin-invernadero-detalles-controlador',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './detailscontroller.component.html',
  animations: [fundido]
})
export class DetailsControllerComponent {
	constructor(private router:Router){

	}
volver(){
this.router.navigate(['/admin/detailsinv']);
}	
}
