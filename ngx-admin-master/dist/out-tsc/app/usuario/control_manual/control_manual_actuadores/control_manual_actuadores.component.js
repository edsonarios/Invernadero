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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var io = require("socket.io-client");
var global_1 = require("../../../../service/global");
var sensores_service_1 = require("../../../../service/sensores.service");
var router_1 = require("@angular/router");
var controladores_service_1 = require("../../../../service/controladores.service");
var pines_service_1 = require("../../../../service/pines.service");
var invernadero_service_1 = require("../../../../service/invernadero.service");
var invernadero_1 = require("../../../../model/invernadero");
var animation_1 = require("../../../animation");
var Rx_1 = require("rxjs/Rx");
var ControlManualActuadoresComponent = /** @class */ (function () {
    function ControlManualActuadoresComponent(router, ControlService, _sensorService, pinService, invService) {
        //   parseInt()
        var _this = this;
        this.router = router;
        this.ControlService = ControlService;
        this._sensorService = _sensorService;
        this.pinService = pinService;
        this.invService = invService;
        this.role = localStorage.getItem('role');
        this.idInvernadero = localStorage.getItem('user_inv_id');
        this.uuid = "arduino";
        this.uuidd = [];
        this.positionBombas = 0;
        this.positionVentiladores = 1;
        this.positionVentanas = 2;
        this.positionPuertas = 3;
        this.inv = new invernadero_1.Invernadero(localStorage.getItem('user_inv_id'), '', '', '', '', '', '', '', '', '', '');
        this.invService.show(this.inv).subscribe(function (response) {
            _this.inv = response;
            _this.minuto = _this.inv[0]['tiempoFuncionMotor'].substring(3, 5);
            _this.segundo = _this.inv[0]['tiempoFuncionMotor'].substring(6, 8);
            _this.minuto = parseInt(_this.minuto);
            _this.segundo = parseInt(_this.segundo);
            _this.time = (_this.minuto * 60) + _this.segundo;
        }, function (error) {
            console.log(error);
        });
        this.estado = 'ABIERTO';
        this.estado2 = 'ABIERTO';
        localStorage.setItem('route', 'Cactuadores');
        this.urlSocket = global_1.GLOBAL.urlSocket;
        this.socket = io(this.urlSocket);
        //RECOGE TODOS LOS CONTROLADORES VINCULADOS A ESTE INVERNADERO
        this.ControlService.showControlador(localStorage.getItem('user_inv_id')).subscribe(function (response) {
            _this.Controller = response;
            console.log(_this.Controller);
        }, function (error) {
        });
        //RECOGE TODOS LOS DISPOSITIVOS VINCULADOS A ESTE INVERNADERO
        this.pinService.MostrarPinesActuadores(localStorage.getItem('user_inv_id')).subscribe(function (response) {
            _this.Devices = response;
            console.log(_this.Devices);
        }, function (error) {
            console.log(error);
        });
    }
    ControlManualActuadoresComponent.prototype.Abrir = function (uuid, nroPin1, nroPin2, estado1, estado2, estado3, estado4, posI, posJ, position) {
        var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin1 + ",\"value\":1},\"timestamp\":1517522296902}";
        this.socket.emit('message', a);
    };
    ControlManualActuadoresComponent.prototype.Cerrar = function (uuid, nroPin1, nroPin2, estado1, estado2, estado3, estado4, posI, posJ, position) {
        var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":1},\"timestamp\":1517522296902}";
        this.socket.emit('message', a);
    };
    ControlManualActuadoresComponent.prototype.actualiza = function (uuid) {
        console.log(uuid);
        var payload = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":\"1\",\"value\":1},\"timestamp\":1517522296903}";
        this.socket.emit('actualizacion', payload);
        /*var payload = `{"agent":{"uuid":"${uuid}"},"actuador":{"type":"1","value":1},"timestamp":1517522296903}`
            client.publish("actualizacion", payload)*/
    };
    ControlManualActuadoresComponent.prototype.apagaMotor = function (uuid, nroPin1, nroPin2) {
        var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":0},\"timestamp\":1517522296902}";
        //publica por socket el mensaje
        this.socket.emit('message', a);
        var b = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin1 + ",\"value\":0},\"timestamp\":1517522296902}";
        //publica por socket el mensaje
        this.socket.emit('message', b);
    };
    ControlManualActuadoresComponent.prototype.control = function (uuid, nroPin, estado, posController, posDevice, pos) {
        if (estado == 0) {
            estado = 1;
            this.Devices[posController][posDevice][pos]['accionPin'] = 1;
        }
        else {
            estado = 0;
            this.Devices[posController][posDevice][pos]['accionPin'] = 0;
        }
        //Crea un json para publicarlo mediante socket y socket lo publica por mqtt
        var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin + ",\"value\":" + estado + "},\"timestamp\":1517522296902}";
        //publica por socket el mensaje
        this.socket.emit('message', a);
    };
    ControlManualActuadoresComponent.prototype.controller = function (uuid, nroPin1, nroPin2, estado1, estado2, estado3, estado4, posI, posJ, position) {
        /* console.log('UUID:' +uuid);
         console.log('NRO PIN(1): '+ nroPin1);
         console.log('NRO PIN(2): '+ nroPin2);
         console.log('================');
         console.log('EL ESTADO ['+estado3+']['+estado4+']['+estado1+']['+estado2+']');
         console.log('POSICION: [' +posI+']-['+posJ+']');*/
        if (estado3 == 0 && estado4 == 0 && estado1 == 1 && estado2 == 0) {
            //ABIERTO
            this.Devices[posI][position][posJ][0]['accionPin'] = 0;
            this.Devices[posI][position][posJ][1]['accionPin'] = 1;
            this.Devices[posI][position][posJ][2]['accionPin'] = 0;
            this.Devices[posI][position][posJ][3]['accionPin'] = 0;
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":1},\"timestamp\":1517522296902}";
            //publica por socket el mensaje
            this.socket.emit('message', a);
            // aqui esta cerrandose. Activando la bomba
        }
        if (estado3 == 0 && estado4 == 1) {
            //CERRANDO
            this.Devices[posI][position][posJ][0]['accionPin'] = 0;
            this.Devices[posI][position][posJ][1]['accionPin'] = 0;
            this.Devices[posI][position][posJ][2]['accionPin'] = 0;
            this.Devices[posI][position][posJ][3]['accionPin'] = 1;
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":0},\"timestamp\":1517522296902}";
            //publica por socket el mensaje
            this.socket.emit('message', a);
        }
        if (estado3 == 0 && estado4 == 0 && estado1 == 0 && estado2 == 1) {
            //CERRADO
            this.Devices[posI][position][posJ][0]['accionPin'] = 1;
            this.Devices[posI][position][posJ][1]['accionPin'] = 0;
            this.Devices[posI][position][posJ][2]['accionPin'] = 0;
            this.Devices[posI][position][posJ][3]['accionPin'] = 0;
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin1 + ",\"value\":1},\"timestamp\":1517522296902}";
            //publica por socket el mensaje
            this.socket.emit('message', a);
        }
        if (estado3 == 1 && estado4 == 0) {
            //ABRIENDO
            this.Devices[posI][position][posJ][0]['accionPin'] = 0;
            this.Devices[posI][position][posJ][1]['accionPin'] = 0;
            this.Devices[posI][position][posJ][2]['accionPin'] = 1;
            this.Devices[posI][position][posJ][3]['accionPin'] = 0;
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin1 + ",\"value\":0},\"timestamp\":1517522296902}";
            //publica por socket el mensaje
            this.socket.emit('message', a);
        }
    };
    ControlManualActuadoresComponent.prototype.controller2 = function (uuid, nroPin1, nroPin2, estado1, estado2, estadoActual, posI, posJ, position, Tiempo) {
        var _this = this;
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
        minuto = (minuto * 60) * 1000;
        segundo = segundo * 1000;
        time = minuto + segundo;
        //console.log('time : '+time);
        if (estadoActual == '0') {
            this.Devices[posI][position][posJ][0]['accionPin'] = 1;
            this.Devices[posI][position][posJ][1]['accionPin'] = 0;
            //Para cambiar el valor en sensorId que determina si se cerro o abrio la puerta 
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":0},\"timestamp\":1}";
            //publica por socket el mensaje 
            this.socket.emit('message2', a);
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin1 + ",\"value\":1},\"timestamp\":1517522296902}";
            //publica por socket el mensaje
            this.socket.emit('message', a);
            var numbers = Rx_1.Observable.timer(time); // Call after 10 second.. Please set your time
            numbers.subscribe(function (x) {
                //alert("10 second");
                _this.Devices[posI][position][posJ][0]['accionPin'] = 0;
                _this.Devices[posI][position][posJ][1]['accionPin'] = 0;
                var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin1 + ",\"value\":0},\"timestamp\":1517522296902}";
                //publica por socket el mensaje
                _this.socket.emit('message', a);
                _this.Devices[posI][position][posJ][1]['sensorId'] = 1;
            });
        }
        else {
            this.Devices[posI][position][posJ][0]['accionPin'] = 0;
            this.Devices[posI][position][posJ][1]['accionPin'] = 1;
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":1},\"timestamp\":1517522296902}";
            //publica por socket el mensaje
            this.socket.emit('message', a);
            var numbers = Rx_1.Observable.timer(time); // Call after 10 second.. Please set your time
            numbers.subscribe(function (x) {
                //alert("10 second");
                _this.Devices[posI][position][posJ][0]['accionPin'] = 0;
                _this.Devices[posI][position][posJ][1]['accionPin'] = 0;
                var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":0},\"timestamp\":0}";
                //publica por socket el mensaje
                _this.socket.emit('message2', a);
                var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":0},\"timestamp\":1517522296902}";
                //publica por socket el mensaje
                _this.socket.emit('message', a);
                _this.Devices[posI][position][posJ][1]['sensorId'] = 0;
            });
        }
    };
    ControlManualActuadoresComponent.prototype.ApagarMotor = function (uuid, nroPin1, nroPin2, estado1, estado2, estadoActual, posI, posJ, position) {
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
            //Para cambiar el valor en sensorId que determina si se cerro o abrio la puerta 
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":0},\"timestamp\":1}";
            //publica por socket el mensaje 
            this.socket.emit('message2', a);
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin1 + ",\"value\":0},\"timestamp\":1517522296902}";
            //publica por socket el mensaje
            this.socket.emit('message', a);
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":0},\"timestamp\":1517522296902}";
            //publica por socket el mensaje
            this.socket.emit('message', a);
        }
        else {
            //Para cambiar el valor en sensorId que determina si se cerro o abrio la puerta 
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":0},\"timestamp\":0}";
            //publica por socket el mensaje
            this.socket.emit('message2', a);
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin1 + ",\"value\":0},\"timestamp\":1517522296902}";
            //publica por socket el mensaje
            this.socket.emit('message', a);
            var a = "{\"agent\":{\"uuid\":\"" + uuid + "\"},\"actuador\":{\"type\":" + nroPin2 + ",\"value\":0},\"timestamp\":1517522296902}";
            //publica por socket el mensaje
            this.socket.emit('message', a);
        }
    };
    ControlManualActuadoresComponent.prototype.ngAfterViewInit = function () {
        //estado de los botones en tiempo real
        this.startRealtime();
    };
    ControlManualActuadoresComponent.prototype.startRealtime = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.socket.on('EsActuador', function (payload) {
                    // console.log("pasoo 1")
                    // console.log(payload)
                    //añadimos el nuevo dato 
                    _this.funcionMostrarPinesActuadores();
                });
                return [2 /*return*/];
            });
        });
    };
    ControlManualActuadoresComponent.prototype.funcionMostrarPinesActuadores = function () {
        var _this = this;
        this.pinService.MostrarPinesActuadores(localStorage.getItem('user_inv_id')).subscribe(function (response) {
            _this.Devices = response;
            //console.log(this.Devices);       
        }, function (error) {
            console.log(error);
        });
    };
    ControlManualActuadoresComponent = __decorate([
        core_1.Component({
            selector: 'ngx-usuario-control-manual-actuadores',
            styleUrls: ['./control_manual_actuadores.component.scss'],
            templateUrl: './control_manual_actuadores.component.html',
            providers: [controladores_service_1.ControladorService, sensores_service_1.SensorService, pines_service_1.PinesService, invernadero_service_1.InvernaderoService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            controladores_service_1.ControladorService,
            sensores_service_1.SensorService,
            pines_service_1.PinesService,
            invernadero_service_1.InvernaderoService])
    ], ControlManualActuadoresComponent);
    return ControlManualActuadoresComponent;
}());
exports.ControlManualActuadoresComponent = ControlManualActuadoresComponent;
//# sourceMappingURL=control_manual_actuadores.component.js.map