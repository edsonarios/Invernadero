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
//importar servicio, 
var producto_1 = require("../../../../model/producto");
var global_1 = require("../../../../service/global");
var producto_service_1 = require("../../../../service/producto.service");
var upload_service_1 = require("../../../../service/upload.service");
var animation_1 = require("../../../animation");
var ProductosAgregarComponent = /** @class */ (function () {
    function ProductosAgregarComponent(router, prodService, uploadService) {
        this.router = router;
        this.prodService = prodService;
        this.uploadService = uploadService;
        this.prod = new producto_1.Producto('', '', '', '', '', '');
        this.Semanas;
        this.Dias;
        this.url = global_1.GLOBAL.url;
    }
    ProductosAgregarComponent.prototype.addProd = function () {
        var _this = this;
        console.log('LA URL ES: ' + this.url + 'guardarImagen');
        console.log('ENTRA AL METODO');
        this.uploadService.makeFileRequest(this.url + 'guardarImagen', [], this.filesToUpload, '', 'image').then(function (result) {
            _this.prod.imagen = result.image;
            console.log(result['nombre']);
            _this.prod.imagen = result['nombre'];
            if (_this.Semanas < 10) {
                _this.Semanas = '0' + _this.Semanas;
            }
            if (_this.Dias < 10) {
                _this.Dias = '0' + _this.Dias;
            }
            _this.prod.tiempoProduccion = _this.Semanas + 's-' + _this.Dias + 'd';
            console.log(_this.prod);
            _this.prodService.añadirProducto(_this.prod).subscribe(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        });
        this.router.navigateByUrl('/producto', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Administrador/Productos/Catalogo']);
        });
    };
    ProductosAgregarComponent.prototype.volver = function () {
        var _this = this;
        this.router.navigateByUrl('/producto', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Administrador/Productos/Catalogo']);
        });
    };
    ProductosAgregarComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
    };
    ProductosAgregarComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-producos-agregar',
            styleUrls: ['./productos_agregar.component.scss'],
            templateUrl: './productos_agregar.component.html',
            providers: [producto_service_1.ProductoService, upload_service_1.UploadService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            producto_service_1.ProductoService,
            upload_service_1.UploadService])
    ], ProductosAgregarComponent);
    return ProductosAgregarComponent;
}());
exports.ProductosAgregarComponent = ProductosAgregarComponent;
//# sourceMappingURL=productos_agregar.component.js.map