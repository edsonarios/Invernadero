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
var producto_service_1 = require("../../../../service/producto.service");
var animation_1 = require("../../../animation");
var ProductoAgregarComponent = /** @class */ (function () {
    function ProductoAgregarComponent(router, prodService) {
        var _this = this;
        this.router = router;
        this.prodService = prodService;
        this.prodService.ObtenerProductos().subscribe(function (response) {
            _this.prod = response;
            console.log(_this.prod);
        }, function (error) {
            console.log(error);
        });
    }
    ProductoAgregarComponent.prototype.volver = function () {
        var _this = this;
        this.router.navigateByUrl('/addProducto', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Usuario/Producto/Listar']);
        });
    };
    ProductoAgregarComponent.prototype.agregar = function (idProd) {
        var _this = this;
        this.prodService.añadirProductoUsuario(localStorage.getItem('user_inv_id'), idProd).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        this.router.navigateByUrl('/addProducto', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Usuario/Producto/Listar']);
        });
    };
    ProductoAgregarComponent = __decorate([
        core_1.Component({
            selector: 'ngx-usuario-producto-agregar',
            styleUrls: ['./producto_agregar.component.scss'],
            templateUrl: './producto_agregar.component.html',
            providers: [producto_service_1.ProductoService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            producto_service_1.ProductoService])
    ], ProductoAgregarComponent);
    return ProductoAgregarComponent;
}());
exports.ProductoAgregarComponent = ProductoAgregarComponent;
//# sourceMappingURL=producto_agregar.component.js.map