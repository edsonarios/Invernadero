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
var tester_menu_1 = require("./tester-menu");
var TesterComponent = /** @class */ (function () {
    function TesterComponent(router) {
        this.router = router;
        this.menu = tester_menu_1.MENU_ITEMS;
    }
    TesterComponent.prototype.ngOnInit = function () {
    };
    TesterComponent = __decorate([
        core_1.Component({
            selector: 'ngx-Tester',
            template: "\n    <ngx-one-column-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-one-column-layout>\n  ",
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], TesterComponent);
    return TesterComponent;
}());
exports.TesterComponent = TesterComponent;
//# sourceMappingURL=tester.component.js.map