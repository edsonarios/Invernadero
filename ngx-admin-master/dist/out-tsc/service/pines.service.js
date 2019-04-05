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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var global_1 = require("./global");
var PinesService = /** @class */ (function () {
    function PinesService(_http) {
        this._http = _http;
        this.url = global_1.GLOBAL.url;
    }
    PinesService.prototype.ShowDevices = function (idInv) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'mostrarTodosPines', { invernaderoId: idInv }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PinesService.prototype.ShowDevicesController = function (idController) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'mostrarTodosPinesControlador', { controladorId: idController }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PinesService.prototype.Activate = function (idController, NroP, DescP, dep, sensID, Mod, Mar, classP, Tmotor) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'activarPin', { controladorId: idController, nroPin: NroP, descripcionPin: DescP, depende: dep, sensorId: sensID, modelo: Mod, marca: Mar, clasePin: classP, tiempoMotor: Tmotor }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PinesService.prototype.desactivarpin = function (idpin, ControllerId, descpin) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'desactivarPin', { id: idpin, descripcionPin: descpin, controladorId: ControllerId }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PinesService.prototype.muestraSensores = function (idController) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'mostrarTodosPinesControladorAnalogicos', { controladorId: idController }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PinesService.prototype.muestraPin = function (idPin) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'findOnePin', { id: idPin }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PinesService.prototype.MostrarPinesActuadores = function (ID) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'mostrarActuadores', { invernaderoId: ID }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PinesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PinesService);
    return PinesService;
}());
exports.PinesService = PinesService;
//# sourceMappingURL=pines.service.js.map