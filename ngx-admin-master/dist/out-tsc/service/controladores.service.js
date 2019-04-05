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
var ControladorService = /** @class */ (function () {
    function ControladorService(_http) {
        this._http = _http;
        this.url = global_1.GLOBAL.url;
    }
    ControladorService.prototype.AgregaControlador = function (uID, idInv, MarC, ModC, NDig, NAn) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'addControlador', { usuarioId: uID, invernaderoId: idInv, marcaC: MarC, modeloC: ModC, pinesDigitales: NDig, pinesAnalogicos: NAn }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ControladorService.prototype.showControlador = function (idInv) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'mostrarControladores', { invernaderoId: idInv }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ControladorService.prototype.ObtenerControladorUsuario = function (idInv) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'uObtenerControladores', { invernaderoId: idInv }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ControladorService.prototype.ObtenerControladores = function (idInv) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'mostrarControladores', { invernaderoId: idInv }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ControladorService.prototype.actuadorEstado = function (uuid) {
        return this._http.get(this.url + 'actuador/' + uuid)
            .map(function (res) { return res.json(); });
    };
    ControladorService.prototype.deleteController = function (idC) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'eliminarControlador', { id: idC }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ControladorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ControladorService);
    return ControladorService;
}());
exports.ControladorService = ControladorService;
//# sourceMappingURL=controladores.service.js.map