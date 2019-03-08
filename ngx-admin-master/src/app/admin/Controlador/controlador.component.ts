import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
//importando los servicios

import { DispositivoService } from '../../service/dispositivos.service';

import { fundido } from '../../animation';
 
@Component({
  selector: 'ngx-Admin-controlador',
  styleUrls: ['./controlador.component.css'],
  templateUrl: './controlador.component.html',
	providers:[DispositivoService],
	 animations: [fundido]

})
export class ControladorComponent implements OnInit {
	public Controller;




constructor(
		private router:Router,
		private dispositiveService: DispositivoService
		){}

ngOnInit(){

	
	this.dispositiveService.ObtenerDispositivos().subscribe(
			response =>{
				this.Controller=response;
				console.log(this.Controller);
			},
			error =>{
				console.log(<any>error)
			}
			);
		

}
Eliminar(id){
	this.dispositiveService.eliminar(id).subscribe(
			response =>{
				this.Controller=response;
				console.log(this.Controller);
			},
			error =>{
				console.log(<any>error)
			}
			);
	this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/admin/controlador']));

}



}
