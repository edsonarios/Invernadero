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
var controladores_service_1 = require("../../../../service/controladores.service");
var pines_service_1 = require("../../../../service/pines.service");
var animation_1 = require("../../../animation");
var ComponentesAgregarPinComponent = /** @class */ (function () {
    function ComponentesAgregarPinComponent(ControlService, pinService, router) {
        var _this = this;
        this.ControlService = ControlService;
        this.pinService = pinService;
        this.router = router;
        this.FinalCarrera = "desactivado";
        this.dependence = '-1';
        this.nroPin;
        this.dependence;
        this.pinD1;
        this.pinD2;
        this.pinA1;
        this.pinA2;
        this.ControlService.showControlador(localStorage.getItem('admin_user_inv_id')).subscribe(function (response) {
            _this.Controller = response;
            //console.log(this.Controller);
        }, function (error) {
        });
    }
    ComponentesAgregarPinComponent.prototype.cambio = function () {
        if (this.FinalCarrera == "desactivado") {
            this.FinalCarrera = "activado";
        }
        else {
            this.FinalCarrera = "desactivado";
        }
    };
    ComponentesAgregarPinComponent.prototype.sensorH = function () {
        var _this = this;
        this.Descripcion = "sensor humedad";
        this.tipo = "Analogico";
        this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(function (response) {
            _this.Devices = response;
            //console.log('muestra todos los pines');
            //console.log(this.Devices);
        }, function (error) {
        });
    };
    ComponentesAgregarPinComponent.prototype.sensorT = function () {
        var _this = this;
        this.Descripcion = "sensor temperatura";
        this.tipo = "Analogico";
        this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(function (response) {
            _this.Devices = response;
            //console.log('muestra todos los pines');
            //console.log(this.Devices);
        }, function (error) {
        });
    };
    ComponentesAgregarPinComponent.prototype.ventilador = function () {
        var _this = this;
        this.Descripcion = "ventilador";
        this.tipo = "Digital";
        this.pinService.muestraSensores(localStorage.getItem('idControlador')).subscribe(function (response) {
            _this.Sensores = response;
            //console.log('muestra todos los pines');
            //console.log(this.Sensores);
        }, function (error) {
        });
        this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(function (response) {
            _this.Devices = response;
            //console.log('muestra todos los pines');
            //console.log(this.Devices);
        }, function (error) {
        });
    };
    ComponentesAgregarPinComponent.prototype.bomba = function () {
        var _this = this;
        this.Descripcion = "bomba";
        this.tipo = "Digital";
        this.pinService.muestraSensores(localStorage.getItem('idControlador')).subscribe(function (response) {
            _this.Sensores = response;
            //console.log('muestra todos los pines');
            //console.log(this.Sensores);
        }, function (error) {
        });
        this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(function (response) {
            _this.Devices = response;
            //console.log('muestra todos los pines');
            // console.log(this.Devices);
        }, function (error) {
        });
    };
    ComponentesAgregarPinComponent.prototype.puerta = function () {
        var _this = this;
        this.Descripcion = "puerta";
        this.tipo = "FinCarrera";
        this.pinService.muestraSensores(localStorage.getItem('idControlador')).subscribe(function (response) {
            _this.Sensores = response;
            //console.log('muestra todos los pines');
            // console.log(this.Sensores);
        }, function (error) {
        });
        this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(function (response) {
            _this.Devices = response;
            //console.log('muestra todos los pines');
            //console.log(this.Devices);
        }, function (error) {
        });
    };
    ComponentesAgregarPinComponent.prototype.ventana = function () {
        var _this = this;
        this.Descripcion = "ventana";
        this.tipo = "FinCarrera";
        this.pinService.muestraSensores(localStorage.getItem('idControlador')).subscribe(function (response) {
            _this.Sensores = response;
            //console.log('muestra todos los pines');
            //console.log(this.Sensores);
        }, function (error) {
        });
        this.pinService.ShowDevicesController(localStorage.getItem('idControlador')).subscribe(function (response) {
            _this.Devices = response;
            //console.log('muestra todos los pines');
            //console.log(this.Devices);
        }, function (error) {
        });
    };
    ComponentesAgregarPinComponent.prototype.AddDigital = function (e) {
        e.preventDefault();
        var var1 = e.target.elements[0].value;
        var var2 = e.target.elements[1].value;
        var var3 = e.target.elements[2].value;
        var1 = this.Descripcion + ' ' + var1;
        this.pinService.Activate(localStorage.getItem('idControlador'), this.nroPin, var1, '-1', this.dependence, var3, var2, '2', '00:00:00').subscribe(function (response) {
            //console.log('EL VALOR QUEDEVUELVE ES');
            //console.log(response);
        }, function (error) {
        });
        this.router.navigate(['/Administrador/Invernaderos/Detalle']);
    };
    ComponentesAgregarPinComponent.prototype.AddAnalogico = function (e) {
        e.preventDefault();
        var var1 = e.target.elements[0].value;
        var var2 = e.target.elements[1].value;
        var var3 = e.target.elements[2].value;
        var1 = this.Descripcion + ' ' + var1;
        this.pinService.Activate(localStorage.getItem('idControlador'), this.nroPin, var1, '-1', '-1', var3, var2, '1', '00:00:00').subscribe(function (response) {
            //console.log(response);
        }, function (error) {
        });
        this.router.navigate(['/Administrador/Invernaderos/Detalle']);
    };
    ComponentesAgregarPinComponent.prototype.addFinalCarrera = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.FinalCarrera == "activado") {
            /*  CODIGO CON FINALES DE CARRERA  */
            var var1 = e.target.elements[0].value;
            var modelo = e.target.elements[1].value;
            var marca = e.target.elements[2].value;
            this.Descripcion = this.Descripcion + ' ' + var1;
            this.pinService.Activate(localStorage.getItem('idControlador'), this.pinD1, this.Descripcion, '-1', this.dependence, modelo, marca, '2', '00:00:00').subscribe(function (response) {
                _this.result = response;
                //final de carreraa 
                _this.pinService.Activate(localStorage.getItem('idControlador'), _this.pinD2, _this.Descripcion + 'Off', _this.result['id'], '-1', modelo, marca, '3', '00:00:00').subscribe(function (response) {
                }, function (error) {
                });
                //Fin de Carrera ON 
                _this.pinService.Activate(localStorage.getItem('idControlador'), _this.pinA1, 'finalOn', _this.result['id'], '-1', modelo, marca, '3', '00:00:00').subscribe(function (response) {
                }, function (error) {
                });
                //final de carrera OFF 
                _this.pinService.Activate(localStorage.getItem('idControlador'), _this.pinA2, 'finalOff', _this.result['id'], '-1', modelo, marca, '3', '00:00:00').subscribe(function (response) {
                }, function (error) {
                });
            }, function (error) {
            });
        }
        else {
            /* CODIGO SIN FINALES DE CARRERA */
            var var1 = e.target.elements[0].value;
            var modelo = e.target.elements[1].value;
            var marca = e.target.elements[2].value;
            this.Descripcion = this.Descripcion + ' ' + var1;
            var min = e.target.elements[4].value;
            var sec = e.target.elements[5].value;
            if (min < 10) {
                min = '0' + min;
            }
            if (sec < 10) {
                sec = '0' + sec;
            }
            var Tmotor = '00:' + min + ':' + sec;
            this.pinService.Activate(localStorage.getItem('idControlador'), this.pinD1, this.Descripcion, '-1', this.dependence, modelo, marca, '4', Tmotor).subscribe(function (response) {
                _this.result = response;
                //final de carreraa 
                _this.pinService.Activate(localStorage.getItem('idControlador'), _this.pinD2, _this.Descripcion + 'Off', _this.result['id'], '0', modelo, marca, '3', Tmotor).subscribe(function (response) {
                }, function (error) {
                });
            }, function (error) {
            });
        }
        this.router.navigate(['/Administrador/Invernaderos/Detalle']);
    };
    ComponentesAgregarPinComponent.prototype.volver = function () {
        this.router.navigate(['/Administrador/Invernaderos/Detalle']);
    };
    ComponentesAgregarPinComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-componentes-agregar-pin',
            styleUrls: ['./componentes_agregar_pin.component.scss'],
            templateUrl: './componentes_agregar_pin.component.html',
            providers: [controladores_service_1.ControladorService, pines_service_1.PinesService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [controladores_service_1.ControladorService,
            pines_service_1.PinesService,
            router_1.Router])
    ], ComponentesAgregarPinComponent);
    return ComponentesAgregarPinComponent;
}());
exports.ComponentesAgregarPinComponent = ComponentesAgregarPinComponent;
//# sourceMappingURL=componentes_agregar_pin.component.js.map