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
var sensores_service_1 = require("../../../../service/sensores.service");
var controladores_service_1 = require("../../../../service/controladores.service");
var animation_1 = require("../../../animation");
var MonitoreoSensoresComponent = /** @class */ (function () {
    function MonitoreoSensoresComponent(_sensorService, _controlService) {
        var _this = this;
        this._sensorService = _sensorService;
        this._controlService = _controlService;
        this.nombre = [];
        this.nombre2 = [];
        this.uuid = [];
        this.NumeroSensores = [];
        this.UltActualizacion = [];
        this.valor = [];
        this.NombreControlador = [];
        localStorage.setItem('route', 'Msensores');
        var sw = 0;
        this.NumeroControlador = 0;
        var aux = "";
        this._controlService.ObtenerControladores(localStorage.getItem('user_inv_id')).subscribe(function (response) {
            _this.Controller = response;
            //this.datos = response
            if (Array.isArray(response)) {
                response.forEach(function (m) {
                    _this._sensorService.metricsUuid(m.uuid).subscribe(function (response) {
                        aux = m.uuid;
                        _this.NumeroControlador++;
                        _this.NombreControlador.push("Controlador " + _this.NumeroControlador + " / Marca : " + m.marcaC + " / Modelo : " + m.modeloC);
                        _this.UltActualizacion.push("Ultima Actualizacion : ");
                        var aux2 = "aaa";
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
                        sw = 0;
                        //console.log(aux)
                        //this.datos = response
                        if (Array.isArray(response)) {
                            response.forEach(function (m) {
                                _this.uuid.push(aux);
                                _this.nombre.push(m.type);
                                if (sw == 0) {
                                    sw = 1;
                                }
                                else {
                                    _this.NombreControlador.push("");
                                    _this.UltActualizacion.push("");
                                }
                            });
                        }
                        console.log("aux2");
                        console.log(aux2);
                    }, function (error) {
                        // console.log(<any>error)
                    });
                });
            }
            console.log("this.UltActualizacion");
            console.log(_this.UltActualizacion);
        }, function (error) {
            // console.log(<any>error)
        });
    }
    MonitoreoSensoresComponent = __decorate([
        core_1.Component({
            selector: 'ngx-usuario-monitoreo-sensores',
            styleUrls: ['./monitoreo_sensores.component.scss'],
            templateUrl: './monitoreo_sensores.component.html',
            providers: [sensores_service_1.SensorService, controladores_service_1.ControladorService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [sensores_service_1.SensorService,
            controladores_service_1.ControladorService])
    ], MonitoreoSensoresComponent);
    return MonitoreoSensoresComponent;
}());
exports.MonitoreoSensoresComponent = MonitoreoSensoresComponent;
//# sourceMappingURL=monitoreo_sensores.component.js.map