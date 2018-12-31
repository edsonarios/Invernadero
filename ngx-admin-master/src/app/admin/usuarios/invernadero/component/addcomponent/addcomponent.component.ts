import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ControladorService } from '../../../../../service/controladores.service';
import { PinesService } from '../../../../../service/pines.service';

import { fundido } from '../../../../../animation';
@Component({
  selector: 'ngx-admin-invernadero-componente-añadir',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './addcomponent.component.html',
    providers:[ControladorService,PinesService],
    animations: [fundido]
})
export class AddComponentComponent implements OnInit{
public tipo;
public Descripcion; 
public Sensores;
public FinalCarrera ="desactivado";

public Controller;
public Devices;
//digital y Analogico
public nroPin; 
public dependence='-1'; 

public result; 

//Final de carrera
public pinD1;
public pinD2;
public pinA1;
public pinA2;

constructor(
    private ControlService: ControladorService,
    private pinService: PinesService,
	private router:Router){
  this.nroPin;
  this.dependence;
this.pinD1;
this.pinD2;
this.pinA1;
this.pinA2;


	}
ngOnInit(){
this.ControlService.showControlador(localStorage.getItem('admin_user_inv_id')).subscribe(
      response =>{
        this.Controller=response;
        //console.log(this.Controller);
        
      },
      error =>{
        
      }
    );



}	

cambio(){
  if(this.FinalCarrera =="desactivado"){
      this.FinalCarrera="activado";
      
  }else
  {
    this.FinalCarrera="desactivado";
  }
  
    
  
}
sensorH(){
  this.Descripcion="sensor humedad";
  this.tipo="Analogico";

  this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(
      response =>{
        this.Devices=response;
        //console.log('muestra todos los pines');
        //console.log(this.Devices);

        
      },
      error =>{
        
      }
    );



}
sensorT(){
  this.Descripcion="sensor temperatura";
  this.tipo="Analogico";

  this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(
      response =>{
        this.Devices=response;
        //console.log('muestra todos los pines');
        //console.log(this.Devices);

        
      },
      error =>{
        
      }
    );



}
ventilador(){
  this.Descripcion="ventilador";
  this.tipo="Digital";

this.pinService.muestraSensores(localStorage.getItem('idControlador')).subscribe(
      response =>{
        this.Sensores=response;
        //console.log('muestra todos los pines');
        //console.log(this.Sensores);
   
        
      },
      error =>{
        
      }
    );

  this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(
      response =>{
        this.Devices=response;
        //console.log('muestra todos los pines');
        //console.log(this.Devices);

        
      },
      error =>{
        
      }
    );
}
bomba(){
  this.Descripcion="bomba";
  this.tipo="Digital";
  this.pinService.muestraSensores(localStorage.getItem('idControlador')).subscribe(
      response =>{
        this.Sensores=response;
        //console.log('muestra todos los pines');
        //console.log(this.Sensores);

        
      },
      error =>{
        
      }
    );

  this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(
      response =>{
        this.Devices=response;
        //console.log('muestra todos los pines');
       // console.log(this.Devices);

        
      },
      error =>{
        
      }
    );
}
puerta(){
  this.Descripcion="puerta";
  this.tipo="FinCarrera";

    this.pinService.muestraSensores(localStorage.getItem('idControlador')).subscribe(
      response =>{
        this.Sensores=response;
        //console.log('muestra todos los pines');
       // console.log(this.Sensores);

        
      },
      error =>{
        
      }
    );
 
   this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(
      response =>{
        this.Devices=response;
        //console.log('muestra todos los pines');
        //console.log(this.Devices);

        
      },
      error =>{
        
      }
    );
}
ventana(){
  this.Descripcion="ventana";
  this.tipo="FinCarrera";

    this.pinService.muestraSensores(localStorage.getItem('idControlador')).subscribe(
      response =>{
        this.Sensores=response;
        //console.log('muestra todos los pines');
        //console.log(this.Sensores);

        
      },
      error =>{
        
      }
    );
  this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(
      response =>{
        this.Devices=response;
        //console.log('muestra todos los pines');
        //console.log(this.Devices);

        
      },
      error =>{
        
      }
    );
}

AddDigital(e){
e.preventDefault();

var var1=e.target.elements[0].value;
var var2=e.target.elements[1].value;
var var3=e.target.elements[2].value;

var1=this.Descripcion+' '+var1;



this.pinService.Activate(localStorage.getItem('idControlador'),this.nroPin,var1,'-1',this.dependence,var3,var2,'2','00:00:00').subscribe(
      response =>{
        console.log('EL VALOR QUEDEVUELVE ES');
        console.log(response);



      },
      error =>{
        
      }
    );

this.router.navigate(['/admin/detailsinv']);
}
AddAnalogico(e){
e.preventDefault();

var var1=e.target.elements[0].value;
var var2=e.target.elements[1].value;
var var3=e.target.elements[2].value;

var1=this.Descripcion+' '+var1;

this.pinService.Activate(localStorage.getItem('idControlador'),this.nroPin,var1,'-1','-1',var3,var2,'1','00:00:00').subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        
      }
    );
    this.router.navigate(['/admin/detailsinv']);

}

addFinalCarrera(e){
e.preventDefault();

if(this.FinalCarrera=="activado"){

/*  CODIGO CON FINALES DE CARRERA  */
    var var1=e.target.elements[0].value;
    var modelo=e.target.elements[1].value;
    var marca=e.target.elements[2].value;
    this.Descripcion=this.Descripcion+' '+var1;

   this.pinService.Activate(localStorage.getItem('idControlador'),this.pinD1,this.Descripcion,'-1',this.dependence,modelo,marca,'2','00:00:00').subscribe(
      response =>{
        this.result=response;

          //final de carreraa 
          this.pinService.Activate(localStorage.getItem('idControlador'),this.pinD2,this.Descripcion+'Off',this.result['id'],'-1',modelo,marca,'3','00:00:00').subscribe(
          response =>{
          },
          error =>{
          }
          );

          //Fin de Carrera ON 
          this.pinService.Activate(localStorage.getItem('idControlador'),this.pinA1,'finalOn',this.result['id'],'-1',modelo,marca,'3','00:00:00').subscribe(
          response =>{
          },
          error =>{
          }
          );

          //final de carrera OFF 
          this.pinService.Activate(localStorage.getItem('idControlador'),this.pinA2,'finalOff',this.result['id'],'-1',modelo,marca,'3','00:00:00').subscribe(
          response =>{
          },
          error =>{
          }
          );

      },
      error =>{
        
      }
    );


}else{
 /* CODIGO SIN FINALES DE CARRERA */
    var var1=e.target.elements[0].value;
    var modelo=e.target.elements[1].value;
    var marca=e.target.elements[2].value;
    this.Descripcion=this.Descripcion+' '+var1;

    var min= e.target.elements[4].value;
    var sec= e.target.elements[5].value;
    if(min<10)
    {
      min='0'+min;
    }
    if(sec<10)
    { 
      sec='0'+sec;
    }
    var Tmotor='00:'+min+':'+sec;


   this.pinService.Activate(localStorage.getItem('idControlador'),this.pinD1,this.Descripcion,'-1',this.dependence,modelo,marca,'4',Tmotor).subscribe(
      response =>{
        this.result=response;

          //final de carreraa 
          this.pinService.Activate(localStorage.getItem('idControlador'),this.pinD2,this.Descripcion+'Off',this.result['id'],'0',modelo,marca,'3',Tmotor).subscribe(
          response =>{
          },
          error =>{
          }
          );
     },
     error =>{  
     }
    );
}
  this.router.navigate(['/admin/detailsinv']);
}


volver(){

   this.router.navigate(['/admin/detailsinv']);
}
}

