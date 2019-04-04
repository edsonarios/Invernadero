import { Component } from '@angular/core';
import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-usuario-monitoreo-camaras',
  styleUrls: ['./monitoreo_camaras.component.scss'],
  templateUrl: './monitoreo_camaras.component.html',
   animations: [fundido]
})
export class MonitoreoCamarasComponent {

	
constructor(){
localStorage.setItem('route','Mcamaras');	
}
	
}