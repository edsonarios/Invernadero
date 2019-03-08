import { Component } from '@angular/core';

import { fundido } from '../../../../../animation';
@Component({
  selector: 'ngx-admin-invernadero-detalles-componente',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './detailscomponent.component.html',
  animations: [fundido]
})
export class DetailsComponentComponent {
	numeroPines = new Array(12);
}
