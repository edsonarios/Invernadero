import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InvernaderoService } from '../../service/invernadero.service';
import { Invernadero } from '../../model/invernadero';

import { fundido } from '../../animation';

@Component({
  selector: 'ngx-reporte',
  styleUrls: ['./info.component.scss'],
  templateUrl: './info.component.html',
  providers:[InvernaderoService],
  animations: [fundido]

})
export class InfoComponent implements OnInit{
public inv: Invernadero;
  public details;
  public Controller;
  public Devices;
	

  //datos de el usuario
  public departamento;
  public ubicacion;
  public provincia;
  public tempMax;
  public tempMin;
   public tempMedia;
  public timeIntermitencia;
  

  minuto;
  segundo;
  tiempoIntermitencia;
  //datos controlador
  public modelo;

  //datos Dispositivo
  public tipo;
	constructor(
    private invService: InvernaderoService,
		private router:Router){		
		localStorage.setItem('route','info');
	}
	
	ngOnInit(){

//RECOGE TODOS LOS DATOS VINCULADOS A ESTE INVERNADERO
	this.inv = new Invernadero(localStorage.getItem('user_inv_id'),'','','','','','','','','','');
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
      },
      error =>{
        console.log(<any>error);
      }
    );


}

CambiarDatos(e){
    e.preventDefault();
     var departamento=e.target.elements[0].value;
      var ubicacion=e.target.elements[2].value;
      var provincia=e.target.elements[1].value;
      var tempMax=e.target.elements[3].value;
      var tempMin=e.target.elements[5].value;
      var tempMedia=e.target.elements[4].value;
      var min=e.target.elements[6].value;
      var sec =e.target.elements[7].value;

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
    
      this.tiempoIntermitencia='00:'+min+':'+sec;

      this.inv = new Invernadero(localStorage.getItem('admin_user_inv_id'),departamento,ubicacion,provincia,tempMax,tempMin,tempMedia,this.tiempoIntermitencia,localStorage.getItem('admin_user_id'),'','');
      console.log(this.inv);
      
      
      this.invService.editarInvernadero(this.inv).subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(<any>error)
      }
    );
      this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/pages/info']));
      
  }

}
