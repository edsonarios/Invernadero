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
var ProductoService = /** @class */ (function () {
    function ProductoService(_http) {
        this._http = _http;
        this.url = global_1.GLOBAL.url;
    }
    ProductoService.prototype.ObtenerProductos = function () {
        return this._http.get(this.url + 'obtenerProductos').map(function (res) { return res.json(); });
    };
    ProductoService.prototype.añadirProducto = function (producto) {
        var params = JSON.stringify(producto);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'producto', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //muestra productos de el usuario por id de invernadero
    ProductoService.prototype.mostrarProductosInvernadero = function (idInv) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'obtenerProdInv', { invernaderoId: idInv }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductoService.prototype.añadirProductoUsuario = function (idInv, idProd) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'agregarHistorialProducto', { invernaderoId: idInv, productoId: idProd, cantidad: '50' }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductoService.prototype.EliminaProducto = function (idProd) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'eliminarProducto', { id: idProd }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProductoService);
    return ProductoService;
}());
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map