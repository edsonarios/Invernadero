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
var HorarioService = /** @class */ (function () {
    function HorarioService(_http) {
        this._http = _http;
        this.url = global_1.GLOBAL.url;
    }
    HorarioService.prototype.adicionarNuevaHora = function (idBomba, horaIni, dur) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        console.log('ID DE LA BOMBA :');
        console.log(idBomba);
        console.log('HORARIO INICIO :');
        console.log(horaIni);
        console.log('DURACION :');
        console.log(dur);
        return this._http.post(this.url + 'crearHora', { pineId: idBomba, horaInicio: horaIni, duracion: dur }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HorarioService.prototype.mostrarHorarios = function (idInvernadero) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'mostrarHorario2', { id: idInvernadero }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HorarioService.prototype.eliminarHorario = function (idHorario) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'eliminarHora', { id: idHorario }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HorarioService.prototype.obtenerBombas = function (idInvernadero) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'obtenerBombasControlador', { id: idInvernadero }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HorarioService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HorarioService);
    return HorarioService;
}());
exports.HorarioService = HorarioService;
//# sourceMappingURL=horario.service.js.map