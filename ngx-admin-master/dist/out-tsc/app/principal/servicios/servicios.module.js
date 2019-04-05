"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var theme_module_1 = require("../../@theme/theme.module");
var servicios_component_1 = require("./servicios.component");
var ServiciosModule = /** @class */ (function () {
    function ServiciosModule() {
    }
    ServiciosModule = __decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
            ],
            declarations: [
                servicios_component_1.ServiciosComponent,
            ],
        })
    ], ServiciosModule);
    return ServiciosModule;
}());
exports.ServiciosModule = ServiciosModule;
//# sourceMappingURL=servicios.module.js.map