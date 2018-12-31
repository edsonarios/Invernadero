import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InvernaderoService } from '../../../../service/invernadero.service';
import { Invernadero } from '../../../../model/invernadero';

import { ControladorService } from '../../../../service/controladores.service';
import { PinesService } from '../../../../service/pines.service';

import { fundido } from '../../../../animation';
@Component({
  selector: 'ngx-admin-invernadero-details',
  styleUrls: ['./detailsinv.component.css'],
  templateUrl: './detailsinv.component.html',
  providers:[InvernaderoService,ControladorService,PinesService],
    animations: [fundido]
})
export class DetailsInvComponent implements OnInit{
  
	public inv: Invernadero;
  public details;
  public Controller;
  public Devices;
  public Devices2;
	


  //datos de el usuario
  public departamento;
  public ubicacion;
  public provincia;
  public tempMax;
  public tempMin;
  public tempMedia;
  public timeIntermitencia;
  public tiempoPausa;
  public tiempoFuncionMotor;
  
  pinDepende;
  descripcion;
  //datos controlador
  public modelo;

  //datos Dispositivo
  public tipo;

	constructor(
    private ControlService: ControladorService,
    private invService: InvernaderoService,
    private pinService: PinesService,
		private router:Router){

	}
	ngOnInit(){
console.log(this.Devices);
//RECOGE TODOS LOS DATOS VINCULADOS A ESTE INVERNADERO
	this.inv = new Invernadero(localStorage.getItem('admin_user_inv_id'),'','','','','','','','','','');
  this.invService.show(this.inv).subscribe(
      response =>{
        this.details=response;
        console.log(this.details);

          this.departamento=this.details[0]['departamento'];
          this.ubicacion=this.details[0]['ubicacion'];
          this.provincia=this.details[0]['provincia'];
          this.tempMax=this.details[0]['tempMaxima'];
          this.tempMin=this.details[0]['tempMinima'];
          this.tempMedia=this.details[0]['tempMedia'];
          this.tiempoFuncionMotor=this.details[0]['tiempoFuncionMotor'];
          this.tiempoPausa=this.details[0]['tiempoPausa'];
          this.timeIntermitencia=this.details[0]['tiempoIntermitencia'];
      },
      error =>{
        console.log(<any>error);
      }
    );
//RECOGE TODOS LOS CONTROLADORES VINCULADOS A ESTE INVERNADERO
  this.ControlService.showControlador(localStorage.getItem('admin_user_inv_id')).subscribe(
      response =>{
        this.Controller=response;

        console.log(this.Controller);
        
      },
      error =>{
        
      }
    );
//RECOGE TODOS LOS DISPOSITIVOS VINCULADOS A ESTE INVERNADERO
  this.pinService.ShowDevices(localStorage.getItem('admin_user_inv_id')).subscribe(
    response=>{
      this.Devices=response;
      console.log(this.Devices);
      for (var i = 0; i < this.Devices.length; ++i) {
        for (var j = 0; j < this.Devices[i].length; ++j) {
            this.pinService.muestraPin(this.Devices[i][j]['sensorId']).subscribe(
         response=>{
           
           this.descripcion=response.descripcionPin;
           this.pinDepende=response.nroPin;  
           console.log('ESTE ES LA DESCRIPCION');
           console.log(this.descripcion);
          },
        error=>{
        console.log(<any>error);
        }
        );
        }
       

      }
       
       

    },
    error=>{
    console.log(<any>error);
    }
    );
	}
  volver(){
     this.router.navigateByUrl('/editar', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/admin/details']));
}
camaras(){
   this.router.navigateByUrl('/editar', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/admin/camaras']));
}
editar(){
  this.router.navigateByUrl('/editar', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/admin/editinv']));

}

add(num){
  localStorage.setItem('idControlador',num);

   this.router.navigate(['/admin/addcomponent']);
}
eliminar(){

this.invService.deleteInvernaderio(localStorage.getItem('admin_user_inv_id')).subscribe(
      response =>{
       
        console.log(response);
         },
      error =>{
        console.log(<any>error);
      }
    )


  this.router.navigateByUrl('/eliminar', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/admin/details']));
  
}
desPin(idPin,descripcion){
  
this.pinService.desactivarpin(idPin,localStorage.getItem('idControlador'),descripcion).subscribe(
    response=>{
      console.log(response);
    },
    error=>{
    console.log(<any>error);
    }
    );
this.router.navigateByUrl('/desPin', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/admin/detailsinv']));
}
delete(idController){
this.ControlService.deleteController(idController).subscribe(
      response =>{
        this.Controller=response;
        console.log(this.Controller);
        
      },
      error =>{
        
      }
    );
this.router.navigateByUrl('/delete', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/admin/detailsinv']));

}
}
