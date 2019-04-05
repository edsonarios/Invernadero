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
var administrador_menu_1 = require("./administrador-menu");
var AdministradorComponent = /** @class */ (function () {
    function AdministradorComponent(router) {
        this.router = router;
        this.menu = administrador_menu_1.MENU_ITEMS;
        /*	if (localStorage.getItem('status')==null) {
              this.router.navigate(['/Principal/Inicio']);
              window.alert('usted no tiene acceso');
          }*/
    }
    AdministradorComponent = __decorate([
        core_1.Component({
            selector: 'ngx-adinistrador',
            template: "\n    <ngx-one-column-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-one-column-layout>\n  ",
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AdministradorComponent);
    return AdministradorComponent;
}());
exports.AdministradorComponent = AdministradorComponent;
//# sourceMappingURL=administrador.component.js.map