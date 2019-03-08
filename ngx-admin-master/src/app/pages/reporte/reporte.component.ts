import { Component } from '@angular/core';

// servicios y otros
import { User } from '../../model/user';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { fundido } from '../../animation';

@Component({
  selector: 'ngx-reporte',
  styleUrls: ['./reporte.component.scss'],
  templateUrl: './reporte.component.html',
    animations: [fundido]
})
export class ReporteComponent {

closeResult: string;
//console.log(e.target.files[0].name);


	constructor(
		private httpClient: Http,
		private modalService: NgbModal

		){		
		localStorage.setItem('route','reporte');
		
	}
	open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

	
}