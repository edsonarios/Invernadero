"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//Importar Servicios
var invernadero_service_1 = require("../../../../service/invernadero.service");
var controladores_service_1 = require("../../../../service/controladores.service");
var pines_service_1 = require("../../../../service/pines.service");
var animation_1 = require("../../../animation");
var InvernaderosDetalleComponent = /** @class */ (function () {
    function InvernaderosDetalleComponent(ControlService, invService, pinService, router) {
        this.ControlService = ControlService;
        this.invService = invService;
        this.pinService = pinService;
        this.router = router;
        this.Invernadero = {
            'Departamento': "La Paz",
            'provincia': 'Murillo',
            'Ubicacion': 'Larecaja',
            'TempMax': '30',
            'TempMedia': '20',
            'TempMin': '10',
            'TiempoIntermitencia': '00:01:12',
            'TiempoPausa': '00:00:10',
            'TiempoMotor': '00:05:00',
            'urlIcon': 'assets/images/logo.png'
        };
        this.Controladores = [
            {
                'id': '1',
                'uuid': 'Arduino',
                'marcaC': 'Uno',
                'modeloC': 'Arduino-Uno',
                'nroPines': 20,
                'connected': 'true',
            },
            {
                'id': '2',
                'uuid': 'Arduino',
                'marcaC': 'Mega',
                'modeloC': 'Arduino-Mega',
                'nroPines': 82,
                'connected': 'false',
            },
            {
                'id': '2',
                'uuid': 'Arduino',
                'marcaC': 'Uno',
                'modeloC': 'Arduino-Uno',
                'nroPines': 22,
                'connected': 'true',
            }
        ];
        this.Controlador = 0;
        this.Pines = 0;
        /*
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
              //console.log(this.Devices);
              for (var i = 0; i < this.Devices.length; ++i) {
                for (var j = 0; j < this.Devices[i].length; ++j) {
                    this.pinService.muestraPin(this.Devices[i][j]['sensorId']).subscribe(
                 response=>{
                   
                   this.descripcion=response.descripcionPin;
                   this.pinDepende=response.nroPin;
                   //console.log('ESTE ES LA DESCRIPCION');
                   //console.log(this.descripcion);
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
            );*/
    }
    InvernaderosDetalleComponent.prototype.volver = function () {
        this.router.navigate(['/Administrador/Invernaderos/Listar']);
    };
    InvernaderosDetalleComponent.prototype.editar = function () {
        this.router.navigate(['/Administrador/Invernaderos/Editar']);
    };
    InvernaderosDetalleComponent.prototype.VincularControlador = function () {
        this.router.navigate(['/Administrador/Componentes/Controlador']);
    };
    InvernaderosDetalleComponent.prototype.HabilitarPines = function (IDcontrol) {
        //localStorage.setItem('idControlador',IDcontrol);
        this.router.navigate(['/Administrador/Componentes/Pin']);
    };
    InvernaderosDetalleComponent.prototype.eliminar = function () {
        window.alert('Elimina el Invernadero');
        /*
        this.invService.deleteInvernaderio(localStorage.getItem('admin_user_inv_id')).subscribe(
              response =>{
               
                console.log(response);
                 },
              error =>{
                console.log(<any>error);
              }
            )
        
        
          this.router.navigateByUrl('/eliminar', {skipLocationChange: true}).then(()=>
              this.router.navigate(['/Administrador/Invernaderos/Detalle']));*/
    };
    InvernaderosDetalleComponent.prototype.desPin = function (idPin, descripcion) {
        var _this = this;
        this.pinService.desactivarpin(idPin, localStorage.getItem('idControlador'), descripcion).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        this.router.navigateByUrl('/desPin', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Administrador/Invernaderos/Detalle']);
        });
    };
    InvernaderosDetalleComponent.prototype.delete = function (idController) {
        var _this = this;
        this.ControlService.deleteController(idController).subscribe(function (response) {
            _this.Controller = response;
            console.log(_this.Controller);
        }, function (error) {
        });
        this.router.navigateByUrl('/delete', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Administrador/Invernaderos/Detalle']);
        });
    };
    InvernaderosDetalleComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-invernaderos-detalle',
            styleUrls: ['./invernaderos_detalle.component.scss'],
            templateUrl: './invernaderos_detalle.component.html',
            providers: [invernadero_service_1.InvernaderoService, controladores_service_1.ControladorService, pines_service_1.PinesService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [controladores_service_1.ControladorService,
            invernadero_service_1.InvernaderoService,
            pines_service_1.PinesService,
            router_1.Router])
    ], InvernaderosDetalleComponent);
    return InvernaderosDetalleComponent;
}());
exports.InvernaderosDetalleComponent = InvernaderosDetalleComponent;
//# sourceMappingURL=invernaderos_detalle.component.js.map