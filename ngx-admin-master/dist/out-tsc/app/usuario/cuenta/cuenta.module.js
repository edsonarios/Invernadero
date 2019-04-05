"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { ToasterModule } from 'angular2-toaster';
var theme_module_1 = require("../../@theme/theme.module");
var cuenta_routing_module_1 = require("./cuenta-routing.module");
var CuentaModule = /** @class */ (function () {
    function CuentaModule() {
    }
    CuentaModule = __decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                cuenta_routing_module_1.CuentaRoutingModule,
            ],
            declarations: cuenta_routing_module_1.routedComponents.slice(),
        })
    ], CuentaModule);
    return CuentaModule;
}());
exports.CuentaModule = CuentaModule;
//# sourceMappingURL=cuenta.module.js.map