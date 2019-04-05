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
var CuentaPerfilComponent = /** @class */ (function () {
    function CuentaPerfilComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    CuentaPerfilComponent.prototype.volver = function () {
        this.router.navigate(['/Usuario/Producto/Listar']);
    };
    CuentaPerfilComponent.prototype.change = function () {
        this.router.navigate(['/Usuario/Cuenta/Editar']);
    };
    CuentaPerfilComponent = __decorate([
        core_1.Component({
            selector: 'ngx-usuario-Cuenta-perfil',
            styleUrls: ['./cuenta_perfil.component.scss'],
            templateUrl: './cuenta_perfil.component.html',
            providers: [user_service_1.UserService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], CuentaPerfilComponent);
    return CuentaPerfilComponent;
}());
exports.CuentaPerfilComponent = CuentaPerfilComponent;
//# sourceMappingURL=cuenta_perfil.component.js.map