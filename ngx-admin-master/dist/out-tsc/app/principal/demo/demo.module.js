"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var demo_component_1 = require("./demo.component");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var demo_routing_module_1 = require("./demo-routing.module");
var theme_module_1 = require("../../@theme/theme.module");
var PAGES_COMPONENTS = [
    demo_component_1.DemoComponent,
];
var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        core_1.NgModule({
            imports: [
                demo_routing_module_1.PagesRoutingModule,
                theme_module_1.ThemeModule,
                dashboard_module_1.DashboardModule,
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], DemoModule);
    return DemoModule;
}());
exports.DemoModule = DemoModule;
//# sourceMappingURL=demo.module.js.map