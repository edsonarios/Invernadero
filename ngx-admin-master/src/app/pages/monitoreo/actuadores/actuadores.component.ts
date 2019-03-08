import { Component, OnInit} from '@angular/core';
import { ControladorService } from '../../../service/controladores.service';
import { SensorService } from '../../../service/sensores.service';
import { PinesService } from '../../../service/pines.service';
import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-actuadores',
  templateUrl: './actuadores.component.html',
  providers: [ControladorService,SensorService,PinesService],
  animations: [fundido]
  
})
export class ActuadoresComponent implements OnInit{
  public Controller
public Devices;
  
  constructor(
    private ControlService: ControladorService,
  	private _sensorService: SensorService,
    private pinService: PinesService,){
    localStorage.setItem('route','Mactuadores');
  }
  ngOnInit(){
    //RECOGE TODOS LOS CONTROLADORES VINCULADOS A ESTE INVERNADERO
  this.ControlService.showControlador(localStorage.getItem('user_inv_id')).subscribe(
      response =>{
        this.Controller=response;
        console.log(this.Controller);
        
      },
      error =>{
        
      }
    );
//RECOGE TODOS LOS DISPOSITIVOS VINCULADOS A ESTE INVERNADERO
  this.pinService.MostrarPinesActuadores(localStorage.getItem('user_inv_id')).subscribe(
    response=>{
      this.Devices=response;
//      console.log(this.Devices);       
 
      
    },
    error=>{
    console.log(<any>error);
    }
    );
    
    
  
  }

}