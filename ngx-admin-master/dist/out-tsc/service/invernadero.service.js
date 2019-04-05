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
var InvernaderoService = /** @class */ (function () {
    function InvernaderoService(_http) {
        this._http = _http;
        this.url = global_1.GLOBAL.url;
    }
    InvernaderoService.prototype.Añadir = function (invernadero) {
        var params = JSON.stringify(invernadero);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'invernadero', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InvernaderoService.prototype.show = function (invernadero) {
        var params = JSON.stringify(invernadero);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'obtenerInv', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InvernaderoService.prototype.editarInvernadero = function (invernadero) {
        var params = JSON.stringify(invernadero);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'updateInvernadero', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InvernaderoService.prototype.deleteInvernaderio = function (idInv) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'eliminarInvernadero', { invernaderoId: idInv }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InvernaderoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], InvernaderoService);
    return InvernaderoService;
}());
exports.InvernaderoService = InvernaderoService;
//# sourceMappingURL=invernadero.service.js.map