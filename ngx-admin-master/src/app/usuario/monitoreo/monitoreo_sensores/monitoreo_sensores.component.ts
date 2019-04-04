import { Component} from '@angular/core';
import * as io from 'socket.io-client';
import { SensorService } from '../../../../service/sensores.service';
import { ControladorService } from '../../../../service/controladores.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-usuario-monitoreo-sensores',
  styleUrls: ['./monitoreo_sensores.component.scss'],
  templateUrl: './monitoreo_sensores.component.html',
  providers: [SensorService,ControladorService],
  animations: [fundido]
})
export class MonitoreoSensoresComponent {
 nombre = [] ;
  nombre2 = [] ;
  uuid = [] ;
  NumeroSensores= [];
  UltActualizacion=[];
  valor = []
  
  Controller;
  NombreControlador=[]
  NumeroControlador;
	
constructor(private _sensorService: SensorService,
              private _controlService: ControladorService){	
	
    localStorage.setItem('route','Msensores');
    var sw=0
    this.NumeroControlador=0
    
    var aux=""
    
    this._controlService.ObtenerControladores(localStorage.getItem('user_inv_id')).subscribe(
      response =>{
        this.Controller = response

        //this.datos = response
        if (Array.isArray(response)) {
          response.forEach(m => {


            


                      this._sensorService.metricsUuid(m.uuid).subscribe(
                        
                        response =>{

                          aux=m.uuid
                          this.NumeroControlador++
                          this.NombreControlador.push("Controlador "+this.NumeroControlador +" / Marca : "+m.marcaC+" / Modelo : "+m.modeloC)
                          this.UltActualizacion.push("Ultima Actualizacion : ")
                          var aux2="aaa"
                                      //basado en los sensores, actualiza el ultimo dato que se recibio 
                                      /*this._sensorService.sensor(response[0].type,m.uuid).subscribe(
                                        response =>{
                                          console.log("response")
                                          console.log(response)
                                          
                                          var hora = parseInt(response[0].createdAt.substring(11,13))
                                          
                                          if(hora==0 || hora ==1 || hora ==2 || hora ==3){
                                            hora=+21
                                          }else{
                                            hora=-4
                                          }
                                          aux2="Ultima Actualizacion : "+hora+response[0].createdAt.substring(13,19)+" "+response[0].createdAt.substring(8,10)+"/"+response[0].createdAt.substring(5,7)+"/"+response[0].createdAt.substring(0,4)
                                          //this.UltActualizacion.push("Ultima Actualizacion : "+hora+response[0].createdAt.substring(13,19)+" "+response[0].createdAt.substring(8,10)+"/"+response[0].createdAt.substring(5,7)+"/"+response[0].createdAt.substring(0,4))
                                          //console.log(response[0])
                                        },
                                        error =>{
                                          console.log(<any>error)
                                        }
                                      )*/
                                      

                          sw=0
                          //console.log(aux)
                          //this.datos = response
                          if (Array.isArray(response)) {
                            response.forEach(m => {
                              this.uuid.push(aux)
                              this.nombre.push(m.type)

                              if(sw==0){

                                
                                sw=1
                              }else{
                                this.NombreControlador.push("")
                                this.UltActualizacion.push("")
                              }
                            })
                            
                          }
                          console.log("aux2")
                          console.log(aux2)

                          
                          
                        },
                        error =>{
                         // console.log(<any>error)
                        }
                      )
                      
          
          })
        }
        console.log("this.UltActualizacion")
        console.log(this.UltActualizacion)
        
                    
                        
        
        
      },
      error =>{
       // console.log(<any>error)
      }
    )



    




}
	
}