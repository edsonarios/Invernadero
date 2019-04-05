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
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = global_1.GLOBAL.url;
    }
    UserService.prototype.register = function (user_to_register) {
        var params = JSON.stringify(user_to_register);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'usuario', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.SingUp = function (user) {
        var params = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'login', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.ShowInvernaderos = function (iduser) {
        var params = JSON.stringify(iduser);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'obtenerInvernaderos', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.obtenerUsuarios = function () {
        return this._http.get(this.url + 'obtenerUsuarios').map(function (res) { return res.json(); });
    };
    UserService.prototype.obtenerAdmins = function () {
        return this._http.get(this.url + 'obtenerAdmins').map(function (res) { return res.json(); });
    };
    UserService.prototype.obtenerTesters = function () {
        return this._http.get(this.url + 'obtenerTesters').map(function (res) { return res.json(); });
    };
    UserService.prototype.detalleUsuario = function (iduser) {
        var params = JSON.stringify(iduser);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'obtenerUser', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.cambiarPassword = function (user) {
        var params = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'updateUsuarioPassword', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.editarUser = function (user) {
        var params = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'updateUsuario', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (idUser) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'eliminarUsuario', { id: idUser }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map