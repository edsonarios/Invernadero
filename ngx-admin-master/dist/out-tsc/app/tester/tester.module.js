"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tester_component_1 = require("./tester.component");
var cuentas_module_1 = require("./cuentas/cuentas.module");
var monitoreo_module_1 = require("./monitoreo/monitoreo.module");
var control_manual_module_1 = require("./control_manual/control_manual.module");
var horarios_module_1 = require("./horarios/horarios.module");
var tester_routing_module_1 = require("./tester-routing.module");
var theme_module_1 = require("../@theme/theme.module");
var PAGES_COMPONENTS = [
    tester_component_1.TesterComponent,
];
var TesterModule = /** @class */ (function () {
    function TesterModule() {
    }
    TesterModule = __decorate([
        core_1.NgModule({
            imports: [
                tester_routing_module_1.TesterRoutingModule,
                theme_module_1.ThemeModule,
                cuentas_module_1.CuentasModule,
                monitoreo_module_1.MonitoreoModule,
                control_manual_module_1.ControlManualModule,
                horarios_module_1.HorariosModule
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], TesterModule);
    return TesterModule;
}());
exports.TesterModule = TesterModule;
//# sourceMappingURL=tester.module.js.map