"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var administrador_component_1 = require("./administrador.component");
var reportes_module_1 = require("./reportes/reportes.module");
var administrador_routing_module_1 = require("./administrador-routing.module");
var theme_module_1 = require("../@theme/theme.module");
var PAGES_COMPONENTS = [
    administrador_component_1.AdministradorComponent,
];
var AdministradorModule = /** @class */ (function () {
    function AdministradorModule() {
    }
    AdministradorModule = __decorate([
        core_1.NgModule({
            imports: [
                administrador_routing_module_1.AdministradorRoutingModule,
                theme_module_1.ThemeModule,
                reportes_module_1.ReportesModule,
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], AdministradorModule);
    return AdministradorModule;
}());
exports.AdministradorModule = AdministradorModule;
//# sourceMappingURL=administrador.module.js.map