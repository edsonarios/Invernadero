import { Component} from '@angular/core';

//importar servicio, 
import { User } from '../../../model/user';
import { GLOBAL } from '../../../service/global';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-admin-edit-product',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './edit.component.html',
 animations: [fundido]

})
export class EditProductoComponent {
	

	constructor(){
		
		
	}
	
	
}