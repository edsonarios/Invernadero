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
var animation_1 = require("../../../animation");
var CuentasEditarComponent = /** @class */ (function () {
    function CuentasEditarComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    CuentasEditarComponent.prototype.editUser = function (e) {
        /*
          e.preventDefault();
          var nombre =e.target.elements[0].value;
          var ap_paterno =e.target.elements[1].value;
          var ap_materno =e.target.elements[2].value;
          var direccion =e.target.elements[3].value;
          var telefono =e.target.elements[4].value;
          var correo =e.target.elements[5].value;
          var password =e.target.elements[6].value;
           
        this.user = new User(localStorage.getItem('admin_user_id'),nombre,ap_paterno,ap_materno,'user',direccion,telefono,correo,password,'');
        
            this.userService.editarUser(this.user).subscribe(
              response =>{
                this.user = response.user;
              },
              error =>{
                console.log(<any>error)
              }
            );
        
             this.router.navigate(['/Administrador/Cuentas/Detalle']);
             */
    };
    CuentasEditarComponent.prototype.volver = function () {
        this.router.navigate(['/Administrador/Cuentas/Detalle']);
    };
    CuentasEditarComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-cuentas-editar',
            styleUrls: ['./cuentas_editar.component.scss'],
            templateUrl: './cuentas_editar.component.html',
            providers: [user_service_1.UserService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], CuentasEditarComponent);
    return CuentasEditarComponent;
}());
exports.CuentasEditarComponent = CuentasEditarComponent;
//# sourceMappingURL=cuentas_editar.component.js.map