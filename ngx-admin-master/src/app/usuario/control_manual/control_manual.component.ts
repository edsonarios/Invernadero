import { Component } from '@angular/core';
import { Router } from '@angular/router';

import * as io from 'socket.io-client';
import { GLOBAL } from '../../../service/global';
import { SensorService } from '../../../service/sensores.service';
import { ControladorService } from '../../../service/controladores.service';
import { PinesService } from '../../../service/pines.service';
import { InvernaderoService } from '../../../service/invernadero.service';
import { Invernadero } from '../../../model/invernadero';

import { Observable } from 'rxjs/Rx';
import { fundido } from '../../animation';
@Component({
   selector: 'ngx_Tester_control_manual',
   styleUrls: ['./control_manual.component.scss'],
   templateUrl: './control_manual.component.html',
   providers: [
      ControladorService,
      SensorService,
      PinesService,
      InvernaderoService,
   ],
   animations: [fundido],
})
export class ControlManualComponent {
   // TempMax=30;
   // TempMedia=20;
   // TempMin=10;
   Bomba_Agua = [{}];
   Ventanas = [{}];
   Ventiladores = [{}];
   Puertas = [{}];

   public role = localStorage.getItem('role');
   public Controller;
   public Devices;
   public idInvernadero = localStorage.getItem('user_inv_id');

   public inv: Invernadero;
   public invernadero: Invernadero;
   public minuto;
   public segundo;
   uuid = 'arduino';
   uuidd = [];
   socket;
   public urlSocket: string;

   public TempMax = 0;
   public TempMin = 0;
   public TempMedia = 0;

   public estado;
   public estado2;
   public time;
   numbers;
   public positionBombas = 0;
   public positionVentiladores = 1;
   public positionVentanas = 2;
   public positionPuertas = 3;
   constructor(
      private router: Router,
      private ControlService: ControladorService,
      private _sensorService: SensorService,
      private pinService: PinesService,
      private invService: InvernaderoService
   ) {
      setTimeout(() => {
         this.inv = new Invernadero(
            localStorage.getItem('user_inv_id'),
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
         );
         this.invService.getInvernadero(this.inv).subscribe(
            (res) => {
               console.log('[CONTROL_MANUAL]', res);
               this.inv = res;
               this.minuto = this.inv[0]['tiempoFuncionMotor'].substring(3, 5);
               this.segundo = this.inv[0]['tiempoFuncionMotor'].substring(6, 8);
               this.TempMax = parseInt(this.inv[0]['tempMaxima']);
               this.TempMedia = parseInt(this.inv[0]['tempMedia']);
               this.TempMin = parseInt(this.inv[0]['tempMinima']);
               this.minuto = parseInt(this.minuto);
               this.segundo = parseInt(this.segundo);
               this.time = this.minuto * 60 + this.segundo;
            },
            (error) => {
               console.log(<any>error);
            }
         );
      }, 1000);
      this.estado = 'ABIERTO';
      this.estado2 = 'ABIERTO';

      localStorage.setItem('route', 'Cactuadores');
      this.urlSocket = GLOBAL.urlSocket;
      this.socket = io(this.urlSocket);

      //  RECOGE TODOS LOS CONTROLADORES VINCULADOS A ESTE INVERNADERO
      setTimeout(() => {
         this.ControlService.showControlador(
            localStorage.getItem('user_inv_id')
         ).subscribe(
            (response) => {
               this.Controller = response;
               console.log(this.Controller);
            },
            (error) => {}
         );
      }, 1000);
      //  RECOGE TODOS LOS DISPOSITIVOS VINCULADOS A ESTE INVERNADERO
      setTimeout(() => {
         this.pinService
            .MostrarPinesActuadores(localStorage.getItem('user_inv_id'))
            .subscribe(
               (response) => {
                  this.Devices = response;
                  console.log(this.Devices);
               },
               (error) => {
                  console.log(<any>error);
               }
            );
      }, 1000);
   }

   BtnCtrlTemp(btn, acction) {
      // Temperatura Maxima
      if (btn == 'Max') {
         if (acction == 'Up') {
            this.TempMax = this.TempMax + 1;
            this.inv[0]['tempMaxima'] = this.TempMax + '';
         } else {
            if (this.TempMax > this.TempMedia + 1) {
               this.TempMax = this.TempMax - 1;
               this.inv[0]['tempMaxima'] = this.TempMax + '';
            }
         }
      }
      //  Temperatura media
      if (btn == 'Media') {
         if (acction == 'Up') {
            if (this.TempMedia < this.TempMax - 1) {
               this.TempMedia = this.TempMedia + 1;
               this.inv[0]['tempMedia'] = this.TempMedia + '';
            }
         } else {
            if (this.TempMedia > this.TempMin + 1) {
               this.TempMedia = this.TempMedia - 1;
               this.inv[0]['tempMedia'] = this.TempMedia + '';
            }
         }
      }

      if (btn == 'Min') {
         if (acction == 'Up') {
            if (this.TempMin < this.TempMedia - 1) {
               this.TempMin = this.TempMin + 1;
               this.inv[0]['tempMinima'] = this.TempMin + '';
            }
         } else {
            this.TempMin = this.TempMin - 1;
            this.inv[0]['tempMinima'] = this.TempMin + '';
         }
      }

      this.invernadero = new Invernadero(
         this.inv[0]['id'],
         this.inv[0]['departamento'],
         this.inv[0]['ubicacion'],
         this.inv[0]['provincia'],
         this.inv[0]['tempMaxima'],
         this.inv[0]['tempMinima'],
         this.inv[0]['tempMedia'],
         this.inv[0]['tiempoIntermitencia'],
         this.inv[0]['usuarioId'],
         this.inv[0]['tiempoFuncionMotor'],
         this.inv[0]['tiempoPausa'],
         this.inv[0]['logo']
      );
      this.invService.editarInvernadero(this.invernadero).subscribe(
         (response) => {},
         (error) => {
            console.log(<any>error);
         }
      );
   }

   Abrir(
      uuid,
      nroPin1,
      nroPin2,
      estado1,
      estado2,
      estado3,
      estado4,
      posI,
      posJ,
      position
   ) {
      var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin1},"value":1},"timestamp":1517522296902}`;
      this.socket.emit('message', a);
   }
   Cerrar(
      uuid,
      nroPin1,
      nroPin2,
      estado1,
      estado2,
      estado3,
      estado4,
      posI,
      posJ,
      position
   ) {
      var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":1},"timestamp":1517522296902}`;
      this.socket.emit('message', a);
   }
   actualiza(uuid) {
      console.log(uuid);
      var payload = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":"1","value":1},"timestamp":1517522296903}`;
      this.socket.emit('actualizacion', payload);
      /*var payload = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":"1","value":1},"timestamp":1517522296903}`
    client.publish("actualizacion", payload)*/
   }

   apagaMotor(uuid, nroPin1, nroPin2) {
      var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":0},"timestamp":1517522296902}`;
      // publica por socket el mensaje
      this.socket.emit('message', a);

      var b = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin1},"value":0},"timestamp":1517522296902}`;
      // publica por socket el mensaje
      this.socket.emit('message', b);
   }

   control(uuid, nroPin, estado, posController, posDevice, pos) {
      if (estado == 0) {
         estado = 1;
         this.Devices[posController][posDevice][pos]['accionPin'] = 1;
      } else {
         estado = 0;
         this.Devices[posController][posDevice][pos]['accionPin'] = 0;
      }

      // Crea un json para publicarlo mediante socket y socket lo publica por mqtt
      var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin},"value":${estado}},"timestamp":1517522296902}`;

      // publica por socket el mensaje
      this.socket.emit('message', a);
   }

   controller(
      uuid,
      nroPin1,
      nroPin2,
      estado1,
      estado2,
      estado3,
      estado4,
      posI,
      posJ,
      position
   ) {
      /* console.log('UUID:' +uuid);
   console.log('NRO PIN(1): '+ nroPin1);
   console.log('NRO PIN(2): '+ nroPin2);
   console.log('================');
   console.log('EL ESTADO ['+estado3+']['+estado4+']['+estado1+']['+estado2+']');
   console.log('POSICION: [' +posI+']-['+posJ+']');*/

      if (estado3 == 0 && estado4 == 0 && estado1 == 1 && estado2 == 0) {
         // ABIERTO
         this.Devices[posI][position][posJ][0]['accionPin'] = 0;
         this.Devices[posI][position][posJ][1]['accionPin'] = 1;
         this.Devices[posI][position][posJ][2]['accionPin'] = 0;
         this.Devices[posI][position][posJ][3]['accionPin'] = 0;

         var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":1},"timestamp":1517522296902}`;
         // publica por socket el mensaje
         this.socket.emit('message', a);
         //  aqui esta cerrandose. Activando la bomba
      }

      if (estado3 == 0 && estado4 == 1) {
         // CERRANDO

         this.Devices[posI][position][posJ][0]['accionPin'] = 0;
         this.Devices[posI][position][posJ][1]['accionPin'] = 0;
         this.Devices[posI][position][posJ][2]['accionPin'] = 0;
         this.Devices[posI][position][posJ][3]['accionPin'] = 1;

         var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":0},"timestamp":1517522296902}`;
         // publica por socket el mensaje
         this.socket.emit('message', a);
      }

      if (estado3 == 0 && estado4 == 0 && estado1 == 0 && estado2 == 1) {
         // CERRADO
         this.Devices[posI][position][posJ][0]['accionPin'] = 1;
         this.Devices[posI][position][posJ][1]['accionPin'] = 0;
         this.Devices[posI][position][posJ][2]['accionPin'] = 0;
         this.Devices[posI][position][posJ][3]['accionPin'] = 0;

         var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin1},"value":1},"timestamp":1517522296902}`;
         // publica por socket el mensaje
         this.socket.emit('message', a);
      }

      if (estado3 == 1 && estado4 == 0) {
         // ABRIENDO
         this.Devices[posI][position][posJ][0]['accionPin'] = 0;
         this.Devices[posI][position][posJ][1]['accionPin'] = 0;
         this.Devices[posI][position][posJ][2]['accionPin'] = 1;
         this.Devices[posI][position][posJ][3]['accionPin'] = 0;

         var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin1},"value":0},"timestamp":1517522296902}`;
         // publica por socket el mensaje
         this.socket.emit('message', a);
      }
   }
   controller2(
      uuid,
      nroPin1,
      nroPin2,
      estado1,
      estado2,
      estadoActual,
      posI,
      posJ,
      position,
      Tiempo
   ) {
      /*
     console.log('UUID:' +uuid);
     console.log('NRO PIN(1): '+ nroPin1);
     console.log('NRO PIN(2): '+ nroPin2);
     console.log('================');
     console.log('EL ESTADO ['+estado1+']['+estado2+']');
     console.log('POSICION: [' +posI+']-['+posJ+']');
     console.log('--->'+estadoActual+'<-----');
     console.log('TIEMPO: '+Tiempo);
     */
      var time = Tiempo;
      var minuto = +time.substring(3, 5);
      var segundo = +time.substring(6, 8);
      minuto = minuto * 60 * 1000;
      segundo = segundo * 1000;
      time = minuto + segundo;

      // console.log('time : '+time);

      if (estadoActual == '0') {
         this.Devices[posI][position][posJ][0]['accionPin'] = 1;
         this.Devices[posI][position][posJ][1]['accionPin'] = 0;

         // Para cambiar el valor en sensorId que determina si se cerro o abrio la puerta
         var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":0},"timestamp":1}`;
         // publica por socket el mensaje
         this.socket.emit('message2', a);

         var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin1},"value":1},"timestamp":1517522296902}`;
         // publica por socket el mensaje
         this.socket.emit('message', a);

         var numbers = Observable.timer(time); //  Call after 10 second.. Please set your time
         numbers.subscribe((x) => {
            // alert("10 second");

            this.Devices[posI][position][posJ][0]['accionPin'] = 0;
            this.Devices[posI][position][posJ][1]['accionPin'] = 0;

            var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin1},"value":0},"timestamp":1517522296902}`;
            // publica por socket el mensaje
            this.socket.emit('message', a);

            this.Devices[posI][position][posJ][1]['sensorId'] = 1;
         });
      } else {
         this.Devices[posI][position][posJ][0]['accionPin'] = 0;
         this.Devices[posI][position][posJ][1]['accionPin'] = 1;

         var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":1},"timestamp":1517522296902}`;
         // publica por socket el mensaje
         this.socket.emit('message', a);

         var numbers = Observable.timer(time); //  Call after 10 second.. Please set your time
         numbers.subscribe((x) => {
            // alert("10 second");
            this.Devices[posI][position][posJ][0]['accionPin'] = 0;
            this.Devices[posI][position][posJ][1]['accionPin'] = 0;

            var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":0},"timestamp":0}`;
            // publica por socket el mensaje
            this.socket.emit('message2', a);

            var a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":0},"timestamp":1517522296902}`;
            // publica por socket el mensaje
            this.socket.emit('message', a);

            this.Devices[posI][position][posJ][1]['sensorId'] = 0;
         });
      }
   }
   ApagarMotor(
      uuid,
      nroPin1,
      nroPin2,
      estado1,
      estado2,
      estadoActual,
      posI,
      posJ,
      position
   ) {
      /*
     console.log('UUID:' +uuid);
     console.log('NRO PIN(1): '+ nroPin1);
     console.log('NRO PIN(2): '+ nroPin2);
     console.log('================');
     console.log('EL ESTADO ['+estado1+']['+estado2+']');
     console.log('POSICION: [' +posI+']-['+posJ+']');
     console.log('--->'+estadoActual+'<-----');
     */

      this.Devices[posI][position][posJ][0]['accionPin'] = 0;
      this.Devices[posI][position][posJ][1]['accionPin'] = 0;

      if (estadoActual == '0') {
         // Para cambiar el valor en sensorId que determina si se cerro o abrio la puerta
         let a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":0},"timestamp":1}`;
         // publica por socket el mensaje
         this.socket.emit('message2', a);
         a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin1},"value":0},"timestamp":1517522296902}`;
         // publica por socket el mensaje
         this.socket.emit('message', a);
         a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":0},"timestamp":1517522296902}`;
         // publica por socket el mensaje
         this.socket.emit('message', a);
      } else {
         // Para cambiar el valor en sensorId que determina si se cerro o abrio la puerta
         let a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":0},"timestamp":0}`;
         // publica por socket el mensaje
         this.socket.emit('message2', a);
         a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin1},"value":0},"timestamp":1517522296902}`;
         // publica por socket el mensaje
         this.socket.emit('message', a);
         a = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":${nroPin2},"value":0},"timestamp":1517522296902}`;
         // publica por socket el mensaje
         this.socket.emit('message', a);
      }
   }
   ngAfterViewInit(): void {
      // estado de los botones en tiempo real
      this.startRealtime();
   }

   async startRealtime() {
      this.socket.on('EsActuador', (payload) => {
         this.funcionMostrarPinesActuadores();
      });
   }

   funcionMostrarPinesActuadores() {
      setTimeout(() => {
         this.pinService
            .MostrarPinesActuadores(localStorage.getItem('user_inv_id'))
            .subscribe(
               (response) => {
                  this.Devices = response;
                  // console.log(this.Devices);
               },
               (error) => {
                  console.log(<any>error);
               }
            );
      }, 1000);
   }
}
