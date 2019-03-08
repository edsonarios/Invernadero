import { Component } from '@angular/core';

import { fundido } from '../../../animation';

@Component({
  selector: 'ngx-camaras',
  styleUrls: ['./camaras.component.scss'],
  templateUrl: './camaras.component.html',
  animations: [fundido]
})
export class CamarasComponent {

	constructor(){
		localStorage.setItem('route','Mcamaras');
	}

}
