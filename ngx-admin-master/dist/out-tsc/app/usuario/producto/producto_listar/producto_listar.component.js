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
var user_service_1 = require("../../../../service/user.service");
var user_1 = require("../../../../model/user");
var producto_service_1 = require("../../../../service/producto.service");
var controladores_service_1 = require("../../../../service/controladores.service");
var animation_1 = require("../../../animation");
var ProductoListarComponent = /** @class */ (function () {
    function ProductoListarComponent(router, prodService, userService, ControlService) {
        this.router = router;
        this.prodService = prodService;
        this.userService = userService;
        this.ControlService = ControlService;
        localStorage.setItem('route', 'producto');
    }
    ProductoListarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('role') == 'admin') {
            if (localStorage.getItem('user_inv_id') == null) {
                console.log(' EL LOCALSTORAGE NO EXISTE');
                this.user = new user_1.User(localStorage.getItem('admin_user_id'), '', '', '', '', '', '', '', '', '');
                this.userService.ShowInvernaderos(this.user).subscribe(function (response) {
                    _this.Invenaderos = response;
                    localStorage.setItem('user_inv_id', _this.Invenaderos[0]['id']);
                    // 	console.log('se ha instanciado correctamnte: ');
                    //console.log(localStorage.getItem('user_inv_id'));
                    _this.prodService.mostrarProductosInvernadero(localStorage.getItem('user_inv_id')).subscribe(function (response) {
                        _this.Producto = response;
                        //console.log(this.Producto);
                    }, function (error) {
                        console.log(error);
                    });
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.prodService.mostrarProductosInvernadero(localStorage.getItem('user_inv_id')).subscribe(function (response) {
                    _this.Producto = response;
                    //console.log(this.Producto);
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else {
            if (localStorage.getItem('user_inv_id') == null) {
                //console.log(' EL LOCALSTORAGE NO EXISTE');
                this.user = new user_1.User(localStorage.getItem('user_id'), '', '', '', '', '', '', '', '', '');
                this.userService.ShowInvernaderos(this.user).subscribe(function (response) {
                    _this.Invenaderos = response;
                    localStorage.setItem('user_inv_id', _this.Invenaderos[0]['id']);
                    //	console.log('se ha instanciado correctamnte: ');
                    //	console.log(localStorage.getItem('user_inv_id'));
                    _this.prodService.mostrarProductosInvernadero(localStorage.getItem('user_inv_id')).subscribe(function (response) {
                        _this.Producto = response;
                        //console.log(this.Producto);
                    }, function (error) {
                        console.log(error);
                    });
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.prodService.mostrarProductosInvernadero(localStorage.getItem('user_inv_id')).subscribe(function (response) {
                    _this.Producto = response;
                    //	console.log(this.Producto);
                }, function (error) {
                    console.log(error);
                });
            }
        }
        //RECOGE TODOS LOS CONTROLADORES VINCULADOS A ESTE INVERNADERO
        this.ControlService.showControlador(localStorage.getItem('user_inv_id')).subscribe(function (response) {
            _this.Controller = response;
            //  console.log(this.Controller);
            //localStorage.setItem('uuid',this.Controller[0]['uuid']);
        }, function (error) {
        });
    };
    ProductoListarComponent.prototype.eliminar = function () {
        console.log('elimina el producto de el invernadero');
    };
    ProductoListarComponent.prototype.add = function () {
        this.router.navigate(['/Usuario/Producto/Agregar']);
    };
    ProductoListarComponent = __decorate([
        core_1.Component({
            selector: 'ngx-usuario-producto-listar',
            styleUrls: ['./producto_listar.component.scss'],
            templateUrl: './producto_listar.component.html',
            providers: [producto_service_1.ProductoService, user_service_1.UserService, controladores_service_1.ControladorService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            producto_service_1.ProductoService,
            user_service_1.UserService,
            controladores_service_1.ControladorService])
    ], ProductoListarComponent);
    return ProductoListarComponent;
}());
exports.ProductoListarComponent = ProductoListarComponent;
//# sourceMappingURL=producto_listar.component.js.map