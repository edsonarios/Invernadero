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
var animation_1 = require("../../animation");
var MonitoreoComponent = /** @class */ (function () {
    function MonitoreoComponent(router) {
        this.router = router;
    }
    MonitoreoComponent = __decorate([
        core_1.Component({
            selector: 'ngx-Tester-monitoreo',
            styleUrls: ['./monitoreo.component.scss'],
            templateUrl: './monitoreo.component.html',
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], MonitoreoComponent);
    return MonitoreoComponent;
}());
exports.MonitoreoComponent = MonitoreoComponent;
//# sourceMappingURL=monitoreo.component.js.map