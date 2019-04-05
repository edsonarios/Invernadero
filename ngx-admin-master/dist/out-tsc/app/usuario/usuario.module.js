"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var usuario_component_1 = require("./usuario.component");
var reporte_module_1 = require("./reporte/reporte.module");
var info_module_1 = require("./info/info.module");
var monitoreo_module_1 = require("./monitoreo/monitoreo.module");
var horarios_module_1 = require("./horarios/horarios.module");
var control_manual_module_1 = require("./control_manual/control_manual.module");
var usuario_routing_module_1 = require("./usuario-routing.module");
var theme_module_1 = require("../@theme/theme.module");
var PAGES_COMPONENTS = [
    usuario_component_1.UsuarioComponent,
];
var UsuarioModule = /** @class */ (function () {
    function UsuarioModule() {
    }
    UsuarioModule = __decorate([
        core_1.NgModule({
            imports: [
                usuario_routing_module_1.UsuarioRoutingModule,
                theme_module_1.ThemeModule,
                reporte_module_1.ReporteModule,
                info_module_1.InfoModule,
                monitoreo_module_1.MonitoreoModule,
                horarios_module_1.HorariosModule,
                control_manual_module_1.ControlManualModule,
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], UsuarioModule);
    return UsuarioModule;
}());
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=usuario.module.js.map