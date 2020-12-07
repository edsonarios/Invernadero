import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';
import { NbWindowService } from '@nebular/theme';
import { SensorService } from '../../../service/sensores.service';
import { ControladorService } from '../../../service/controladores.service';
import { PinesService } from '../../../service/pines.service';
import { Observable } from 'rxjs/Rx';
import { GLOBAL } from '../../../service/global';
//declare function thermometer(): any;

import { fundido } from '../../animation';

@Component({
   selector: 'ngx_usuario_Monitoreo',
   styleUrls: ['./monitoreo.component.scss'],
   templateUrl: './monitoreo.component.html',
   providers: [SensorService, ControladorService, PinesService],
   animations: [fundido],
})
export class MonitoreoComponent implements OnInit {
   DatoSensor = [
      { Flujo: 'sensor Flujo bomba 6' },
      { Flujo: 'sensor Flujo bomba 5' },
      { Flujo: 'sensor Flujo bomba 4' },
      { Flujo: 'sensor Flujo bomba Oxi 7' },
      { Flujo: 'sensor Flujo bomba 3' },
      { Flujo: 'sensor Flujo bomba 2' },
      { Flujo: 'sensor Flujo bomba 1' },
      { Flujo: 'sensor Flujo bomba Oxi 8' },
      { Flujo: 'sensor Flujo bomba Oxi 9' },
      { Flujo: 'sensor Flujo bomba Oxi 10' },
   ];

   ValBombas = 0;

   valueFlujoBomba;

   // Sensores
   nombre = [];
   nombre2 = [];

   SensorTH = [];
   Sensoruuid = [];

   SensorTanque = [];
   TanqueUuid = [];

   SensorAgua = [];
   AguaUuid = [];

   SensorFlujoBomba = [];
   FlujoBombaUuid = [];

   FlujoMetricsUuid = [];
   FlujoMetrics = [];
   FlujoMectricsController = [];
   FlujoMectricsControllerUuid = [];

   uuid = [];
   NumeroSensores = [];
   UltActualizacion = [];
   valor = [];

   Controller2 = [];
   NombreControlador = [];
   NumeroControlador;

   Controller = [];
   Devices = [];
   public urlSocket: string;
   socket;

   @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;
   constructor(
      private router: Router,
      private _sensorService: SensorService,
      private _controlService: ControladorService,
      private pinService: PinesService,
      private windowService: NbWindowService
   ) {
      localStorage.setItem('route', 'Mactuadores');
      this.socket = io(GLOBAL.urlSocket);
      var sw = 0;
      this.NumeroControlador = 0;

      var aux = '';
      //Sector Sensores
      this._controlService
         .ObtenerControladores(localStorage.getItem('user_inv_id'))
         .subscribe(
            (response) => {
               this.Controller2 = response;
               //console.log("arduino")
               // console.log(this.Controller2)
               // console.log("arduino")

               //this.datos = response
               if (Array.isArray(response)) {
                  response.forEach((m) => {
                     this._sensorService
                        .metricsUuid(this.Controller2[0]['uuid'])
                        .subscribe(
                           (response) => {
                              aux = m.uuid;
                              this.NumeroControlador++;
                              this.NombreControlador.push(
                                 'Controlador ' +
                                    this.NumeroControlador +
                                    ' / Marca : ' +
                                    m.marcaC +
                                    ' / Modelo : ' +
                                    m.modeloC
                              );
                              this.UltActualizacion.push(
                                 'Ultima Actualizacion : '
                              );
                              var aux2 = 'aaa';

                              sw = 0;
                              //console.log(response);
                              if (Array.isArray(response)) {
                                 response.forEach((m) => {
                                    this.uuid.push(aux);
                                    this.nombre.push(m.type);

                                    if (
                                       m.type.substring(7, 14) == 'tempera' ||
                                       m.type.substring(7, 14) == 'humedad'
                                    ) {
                                       this.SensorTH.push(m.type);
                                       this.Sensoruuid.push(aux);
                                    }
                                    if (m.type.substring(7, 13) == 'Tanque') {
                                       this.SensorTanque.push(m.type);
                                       this.TanqueUuid.push(aux);
                                    }
                                    if (m.type.substring(7, 11) == 'Agua') {
                                       this.SensorAgua.push(m.type);
                                       this.AguaUuid.push(aux);
                                    }
                                    if (m.type.substring(7, 12) == 'Flujo') {
                                       this.SensorFlujoBomba.push(m.type);
                                       this.FlujoBombaUuid.push(aux);
                                    }
                                    if (sw == 0) {
                                       sw = 1;
                                    } else {
                                       this.NombreControlador.push('');
                                       this.UltActualizacion.push('');
                                    }
                                 });
                              }
                              //console.log("aux2")
                              // console.log(aux2)
                              // console.log("Este es el dato Sensores: ");
                              // console.log(this.SensorTH);
                              // console.log(this.Sensoruuid);

                              // console.log("Este es el dato Tanque: ");
                              // console.log(this.SensorTanque);
                              // console.log(this.TanqueUuid);

                              // console.log("Este es el dato: Agua");
                              // console.log(this.SensorAgua);
                              //console.log(this.AguaUuid);

                              console.log('Este es el dato: Flujo');
                              console.log(this.SensorFlujoBomba);
                              // console.log(this.FlujoBombaUuid);
                              console.log(' DEVICES : ');
                              console.log(this.Devices[0][0]);
                              console.log(' Flujo Sensores : ');
                              console.log(this.DatoSensor);
                           },
                           (error) => {
                              // console.log(<any>error)
                           }
                        );
                  });
               }
               // console.log("Ultima Actualizacion es: " +this.UltActualizacion);

               //  console.log("=====================");
               //  console.log(this.uuid);
               // console.log( this.nombre);
            },
            (error) => {
               // console.log(<any>error)
            }
         );
   }
   ngOnInit() {
      //RECOGE TODOS LOS CONTROLADORES VINCULADOS A ESTE INVERNADERO
      this._controlService
         .showControlador(localStorage.getItem('user_inv_id'))
         .subscribe(
            (response) => {
               this.Controller = response;
               //console.log(this.Controller);
            },
            (error) => {}
         );

      //RECOGE TODOS LOS DISPOSITIVOS VINCULADOS A ESTE INVERNADERO

      this.pinService
         .MostrarPinesActuadores(localStorage.getItem('user_inv_id'))
         .subscribe(
            (response) => {
               this.Devices = response;
               // console.log(this.Devices);
               for (var i = 0; i < this.Devices.length; ++i) {
                  for (var j = 0; j < this.Devices[i][0].length; ++j) {
                     //Entra en un loop buscando el sensor de flujo que tenga el mismo valor que la bomba N
                     //console.log(this.Devices[i][0][j]['descripcionPin']);
                     var cadena = this.Devices[i][0][j]['descripcionPin'];

                     var sw = 0;

                     var aux = '';
                     //Sector Sensores
                     this._controlService
                        .ObtenerControladores(
                           localStorage.getItem('user_inv_id')
                        )
                        .subscribe(
                           (response) => {
                              if (Array.isArray(response)) {
                                 response.forEach((m) => {
                                    this._sensorService
                                       .metricsUuid(response[0]['uuid'])
                                       .subscribe(
                                          (response) => {
                                             aux = m.uuid;

                                             var aux2 = 'aaa';

                                             sw = 0;
                                             if (Array.isArray(response)) {
                                                response.forEach((m) => {
                                                   // console.log("---->"+m.type.substring(13).toLowerCase()+"==== "+cadena.toLowerCase());
                                                   if (
                                                      m.type
                                                         .substring(13)
                                                         .toLowerCase() ==
                                                      cadena.toLowerCase()
                                                   ) {
                                                      this.FlujoMetrics.push(
                                                         m.type
                                                      );
                                                      this.FlujoMetricsUuid.push(
                                                         aux
                                                      );
                                                   }

                                                   /*
                            if(m.type.substring(7,11)=="Agua"){
                              this.SensorAgua.push(m.type);
                              this.AguaUuid.push(aux);
                            }*/

                                                   if (sw == 0) {
                                                      sw = 1;
                                                   } else {
                                                   }
                                                });
                                             }
                                          },
                                          (error) => {
                                             console.log(<any>error);
                                          }
                                       );
                                 });
                              }
                           },
                           (error) => {
                              // console.log(<any>error)
                           }
                        );
                  }
                  // this.FlujoMectricsController.push(this.FlujoMetrics);
                  // this.FlujoMectricsControllerUuid.push(this.FlujoMetricsUuid);
               }
               // console.log("el flujo final");
               // console.log(this.FlujoMectricsController);
               //console.log(this.FlujoMectricsControllerUuid);
            },
            (error) => {
               //console.log(<any>error);
            }
         );
   }
   ngAfterViewInit(): void {
      //estado de los botones en tiempo real
      this.startRealtime();
   }
   async startRealtime() {
      this.socket.on('EsActuador', (payload) => {
         // console.log("pasoo 1")
         // console.log(payload)
         //se actualiza segun actuador y update de mqtt para mostrar el estado de los botones en tiempo real
         //this.variable++

         this.funcionMostrarPinesActuadores();
      });
   }
   funcionMostrarPinesActuadores() {
      this.pinService
         .MostrarPinesActuadores(localStorage.getItem('user_inv_id'))
         .subscribe(
            (response) => {
               this.Devices = response;
               //console.log(this.Devices);
            },
            (error) => {
               console.log(<any>error);
            }
         );
   }
   openWindow(nombre, SensorUuid) {
      this.windowService.open(this.contentTemplate, {
         title: nombre,
         context: { Type: nombre, Uuid: SensorUuid },
         hasBackdrop: true,
         closeOnEsc: false,
      });
      //console.log("este es el TEMPLATE :");
      //console.log(this.contentTemplate._projectedViews[""0""].oldValues);
   }
}
