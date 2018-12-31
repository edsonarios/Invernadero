import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControladorService } from '../../../../../service/controladores.service';
import { DispositivoService } from '../../../../../service/dispositivos.service';

import { fundido } from '../../../../../animation';
@Component({
  selector: 'ngx-admin-controlador-add-controlador',
  styleUrls: ['./addcontroller.component.css'],
  templateUrl: './addcontroller.component.html',
  providers:[ControladorService,DispositivoService],
  animations: [fundido]
})
export class AddControllerComponent implements OnInit{
 public Controller;

	constructor(private ControlService: ControladorService,
    private dispositiveService: DispositivoService,
		private router:Router){

	}
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
volver(){

   this.router.navigate(['/admin/detailsinv']);
}
addControlador(ModeloC,MarcaC,NroDig,NroAn){




this.ControlService.AgregaControlador(localStorage.getItem('admin_user_id'),localStorage.getItem('admin_user_inv_id'),MarcaC,ModeloC,NroDig,NroAn).subscribe(
      response =>{
        console.log(response);
    

         
      },
      error =>{
        
      }
    );
   
		this.router.navigate(['/admin/detailsinv']);
 


}

}

