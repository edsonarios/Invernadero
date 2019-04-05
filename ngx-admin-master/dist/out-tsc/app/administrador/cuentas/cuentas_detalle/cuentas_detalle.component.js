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
var invernadero_service_1 = require("../../../../service/invernadero.service");
var animation_1 = require("../../../animation");
var CuentasDetalleComponent = /** @class */ (function () {
    function CuentasDetalleComponent(router, userService, invService) {
        this.router = router;
        this.userService = userService;
        this.invService = invService;
        this.isCollapsed = false;
        // public DetalleCuenta;
        this.DetalleCuenta = {
            'nombre': 'prueba',
            'ap_paterno': 'prueba',
            'ap_materno': 'prueba',
            'direccion': 'prueba',
            'telefono': 'prueba',
            'tipo': 'prueba',
            'correo': 'prueba',
            'password': 'prueba',
        };
    }
    CuentasDetalleComponent.prototype.DetalleInvernadero = function (id) {
        /*
        
        localStorage.setItem('admin_user_inv_id',id);
       this.router.navigate(['/Administrador/Invernaderos/Detalle']);
        */
    };
    CuentasDetalleComponent.prototype.volver = function () {
        this.router.navigate(['/Administrador/Cuentas/Usuarios']);
    };
    CuentasDetalleComponent.prototype.dashboard = function () {
        //this.router.navigate(['/Usuario/Producto/Listar']);
        localStorage.setItem('route', 'producto');
    };
    CuentasDetalleComponent.prototype.editar = function () {
        this.router.navigate(['/Administrador/Cuentas/Editar']);
    };
    CuentasDetalleComponent.prototype.VerInvernaderos = function () {
        this.router.navigate(['/Administrador/Invernaderos/Listar']);
    };
    CuentasDetalleComponent.prototype.eliminar = function () {
        window.alert('Cuenta Eliminada');
        /*
        this.userService.deleteUser(localStorage.getItem('admin_user_id')).subscribe(
              response =>{
                
                console.log(response);
               //console.log(this.exist);
                 },
              error =>{
                console.log(<any>error);
              }
            )
        
          this.router.navigateByUrl('/eliminar', {skipLocationChange: true}).then(()=>
          this.router.navigate(['/Administrador/Cuentas/Usuarios']));
          */
    };
    CuentasDetalleComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-cuentas-detalle',
            styleUrls: ['./cuentas_detalle.component.scss'],
            templateUrl: './cuentas_detalle.component.html',
            providers: [user_service_1.UserService, invernadero_service_1.InvernaderoService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService,
            invernadero_service_1.InvernaderoService])
    ], CuentasDetalleComponent);
    return CuentasDetalleComponent;
}());
exports.CuentasDetalleComponent = CuentasDetalleComponent;
//# sourceMappingURL=cuentas_detalle.component.js.map