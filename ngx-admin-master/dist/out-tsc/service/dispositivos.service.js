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
var DispositivoService = /** @class */ (function () {
    function DispositivoService(_http) {
        this._http = _http;
        this.url = global_1.GLOBAL.url;
    }
    DispositivoService.prototype.ObtenerDispositivos = function () {
        return this._http.get(this.url + 'mostrarDispositivos').map(function (res) { return res.json(); });
    };
    DispositivoService.prototype.crearDispositivo = function (mod, marc, nroPD, nroPA) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'addDispositivo', { modelo: mod, marca: marc, nroDigitales: nroPD, nroAnalogicos: nroPA }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DispositivoService.prototype.eliminar = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'eliminarDispositivo', { id: id }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DispositivoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DispositivoService);
    return DispositivoService;
}());
exports.DispositivoService = DispositivoService;
//# sourceMappingURL=dispositivos.service.js.map