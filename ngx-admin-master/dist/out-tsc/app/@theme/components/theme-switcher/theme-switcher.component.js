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
var theme_1 = require("@nebular/theme");
var themes_switcher_list_component_1 = require("./themes-switcher-list/themes-switcher-list.component");
var ThemeSwitcherComponent = /** @class */ (function () {
    function ThemeSwitcherComponent() {
        this.showTitle = true;
        this.switcherListComponent = themes_switcher_list_component_1.ThemeSwitcherListComponent;
    }
    __decorate([
        core_1.ViewChild(theme_1.NbPopoverDirective),
        __metadata("design:type", theme_1.NbPopoverDirective)
    ], ThemeSwitcherComponent.prototype, "popover", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ThemeSwitcherComponent.prototype, "showTitle", void 0);
    ThemeSwitcherComponent = __decorate([
        core_1.Component({
            selector: 'ngx-theme-switcher',
            templateUrl: './theme-switcher.component.html',
            styleUrls: ['./theme-switcher.component.scss'],
        })
    ], ThemeSwitcherComponent);
    return ThemeSwitcherComponent;
}());
exports.ThemeSwitcherComponent = ThemeSwitcherComponent;
//# sourceMappingURL=theme-switcher.component.js.map