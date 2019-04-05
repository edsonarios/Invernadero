"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ngx_echarts_1 = require("ngx-echarts");
var principal_component_1 = require("./principal.component");
// IMPORTAR LOS MODULOS PARA LLAMAMIENTO DE DATOS
var login_module_1 = require("./login/login.module");
var inicio_module_1 = require("./inicio/inicio.module");
var contactos_module_1 = require("./contactos/contactos.module");
var quienes_somos_module_1 = require("./quienes_somos/quienes_somos.module");
var productos_module_1 = require("./productos/productos.module");
var servicios_module_1 = require("./servicios/servicios.module");
var principal_routing_module_1 = require("./principal-routing.module");
var theme_module_1 = require("../@theme/theme.module");
var PAGES_COMPONENTS = [
    principal_component_1.PrincipalComponent,
];
// INSTANCIAR LOS MODULOS PARA PODER USARLOS
var PrincipalModule = /** @class */ (function () {
    function PrincipalModule() {
    }
    PrincipalModule = __decorate([
        core_1.NgModule({
            imports: [
                ngx_echarts_1.NgxEchartsModule,
                principal_routing_module_1.PrincipalRoutingModule,
                theme_module_1.ThemeModule,
                login_module_1.LoginModule,
                inicio_module_1.InicioModule,
                contactos_module_1.ContactosModule,
                quienes_somos_module_1.QuienesSomosModule,
                productos_module_1.ProductosModule,
                servicios_module_1.ServiciosModule,
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], PrincipalModule);
    return PrincipalModule;
}());
exports.PrincipalModule = PrincipalModule;
//# sourceMappingURL=principal.module.js.map