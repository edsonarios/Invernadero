import { Component } from '@angular/core';
import { Router } from '@angular/router';
//Inportar Servicios
import { InvernaderoService } from '../../../../service/invernadero.service';
import { Invernadero } from '../../../../model/invernadero';

import { fundido } from '../../../animation';

@Component({
  selector: 'ngx-administrador-invernaderos-editar',
  styleUrls: ['./invernaderos_editar.component.scss'],
  templateUrl: './invernaderos_editar.component.html',
 providers:[InvernaderoService],
    animations: [fundido]
})
export class InvernaderosEditarComponent {
	public inv: Invernadero;
    public details;
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

  minuto;
  segundo;

  minuto2;
  segundo2;

  minuto3;
  segundo3;
constructor(private router:Router,
	private invService: InvernaderoService){



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

          this.timeIntermitencia=this.details[0]['tiempoIntermitencia'];
          this.minuto=this.timeIntermitencia.substring(3,5);
          this.segundo=this.timeIntermitencia.substring(6,8);

          this.tiempoFuncionMotor=this.details[0]['tiempoFuncionMotor'];
          this.minuto2=this.tiempoFuncionMotor.substring(3,5);
          this.segundo2=this.tiempoFuncionMotor.substring(6,8);

          this.tiempoPausa=this.details[0]['tiempoPausa'];
          this.minuto3=this.tiempoPausa.substring(3,5);
          this.segundo3=this.tiempoPausa.substring(6,8);
      },
      error =>{
        console.log(<any>error);
      }
    );

}
editInvernadero(e){
		e.preventDefault();
		 var departamento=e.target.elements[0].value;
  		var ubicacion=e.target.elements[2].value;
  		var provincia=e.target.elements[1].value;
  		var tempMax=e.target.elements[3].value;
  		var tempMin=e.target.elements[5].value;
      var tempMedia=e.target.elements[4].value;

      var min=e.target.elements[6].value;
      var sec =e.target.elements[7].value;

      var min2=e.target.elements[8].value;
      var sec2 =e.target.elements[9].value;

      var min3=e.target.elements[10].value;
      var sec3 =e.target.elements[11].value;

     console.log('la dimension de el minuto');
     console.log(min.length);

     if (min.length<2) {
       if(min<10)
        {
          min='0'+min;
        }
     }
    if (sec.length<2) {
      if(sec<10)
      {
        sec='0'+sec;
      }
    }
      //PARA FUNCIONAMIENTO DEL MOTOR
      if (min2.length<2) {
       if(min2<10)
        {
          min2='0'+min2;
        }
     }
    if (sec2.length<2) {
      if(sec2<10)
      {
        sec2='0'+sec2;
      }
    }
      //PARA TIEMPO DE PAUSA
      if (min3.length<2) {
       if(min3<10)
        {
          min3='0'+min3;
        }
     }
    if (sec3.length<2) {
      if(sec3<10)
      {
        sec3='0'+sec3;
      }
    }


  		this.inv = new Invernadero(localStorage.getItem('admin_user_inv_id'),departamento,ubicacion,provincia,tempMax,tempMin,tempMedia,'00:'+min+':'+sec,localStorage.getItem('admin_user_id'),'00:'+min2+':'+sec2,'00:'+min3+':'+sec3);
  		//console.log(this.inv);
      
      
      this.invService.editarInvernadero(this.inv).subscribe(
      response =>{
        //console.log(response);
      },
      error =>{
        console.log(<any>error)
      }
    );
      this.router.navigate(['/Administrador/Invernaderos/Detalle']); 
	}

	volver(){
      this.router.navigate(['/Administrador/Invernaderos/Detalle']);
}

}
