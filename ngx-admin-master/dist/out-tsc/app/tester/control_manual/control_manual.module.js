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
var control_manual_component_1 = require("./control_manual.component");
var ControlManualModule = /** @class */ (function () {
    function ControlManualModule() {
    }
    ControlManualModule = __decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
            ],
            declarations: [
                control_manual_component_1.ControlManualComponent,
            ],
        })
    ], ControlManualModule);
    return ControlManualModule;
}());
exports.ControlManualModule = ControlManualModule;
//# sourceMappingURL=control_manual.module.js.map