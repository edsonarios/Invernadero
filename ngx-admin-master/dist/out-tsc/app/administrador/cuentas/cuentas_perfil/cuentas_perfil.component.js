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
var CuentasPerfilComponent = /** @class */ (function () {
    function CuentasPerfilComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        /*
            this.user = new User(localStorage.getItem('user_id'),'','','','','','','','','');
          //Obtenemos todo el valor de el usuario
          this.userService.detalleUsuario(this.user).subscribe(
              response =>{
                this.identity=response;
        
                this.nombre=this.identity[0]['nombre'];
                this.ap_paterno=this.identity[0]['ap_paterno'];
                this.ap_materno=this.identity[0]['ap_materno'];
                this.direccion=this.identity[0]['direccion'];
                this.telefono=this.identity[0]['telefono'];
                this.correo=this.identity[0]['correo'];
                this.password=this.identity[0]['password'];
              },
              error =>{
                
              }
            );
        */
    }
    CuentasPerfilComponent.prototype.volver = function () {
        this.router.navigate(['/Administrador/Cuentas/Usuarios']);
    };
    CuentasPerfilComponent.prototype.change = function (event) {
        /*
          event.preventDefault();
          var nombre =event.target.elements[0].value;
          var ap_paterno =event.target.elements[1].value;
          var ap_materno =event.target.elements[2].value;
          var direccion =event.target.elements[3].value;
          var telefono =event.target.elements[4].value;
          var correo =event.target.elements[5].value;
          var password =event.target.elements[6].value;
        
          this.user = new User(localStorage.getItem('user_id'),nombre,ap_paterno,ap_materno,localStorage.getItem('role'),direccion,telefono,correo,password,'');
        
            this.userService.editarUser(this.user).subscribe(
              response =>{
              },
              error =>{
                console.log(<any>error)
              }
            );
        alert("Se ha guardado Correctamente");
         this.router.navigate(['/Administrador/Cuentas/Usuarios']);*/
    };
    CuentasPerfilComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-cuentas-perfil',
            styleUrls: ['./cuentas_perfil.component.scss'],
            templateUrl: './cuentas_perfil.component.html',
            providers: [user_service_1.UserService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], CuentasPerfilComponent);
    return CuentasPerfilComponent;
}());
exports.CuentasPerfilComponent = CuentasPerfilComponent;
//# sourceMappingURL=cuentas_perfil.component.js.map