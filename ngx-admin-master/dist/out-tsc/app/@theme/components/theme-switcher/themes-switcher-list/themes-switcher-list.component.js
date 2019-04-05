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
var analytics_service_1 = require("../../../../@core/utils/analytics.service");
var ThemeSwitcherListComponent = /** @class */ (function () {
    function ThemeSwitcherListComponent(themeService, analyticsService) {
        this.themeService = themeService;
        this.analyticsService = analyticsService;
        this.themes = [
            {
                title: 'Light',
                key: 'default',
            },
            {
                title: 'Cosmic',
                key: 'cosmic',
            },
            {
                title: 'Corporate',
                key: 'corporate',
            },
        ];
    }
    ThemeSwitcherListComponent.prototype.onToggleTheme = function (themeKey) {
        this.themeService.changeTheme(themeKey);
        this.analyticsService.trackEvent('switchTheme');
        this.popover.hide();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", theme_1.NbPopoverDirective)
    ], ThemeSwitcherListComponent.prototype, "popover", void 0);
    ThemeSwitcherListComponent = __decorate([
        core_1.Component({
            selector: 'ngx-theme-switcher-list',
            template: "\n    <ul class=\"themes-switcher-list\">\n      <li class=\"themes-switcher-item\"\n          *ngFor=\"let theme of themes\"\n          (click)=\"onToggleTheme(theme.key)\">\n        <i class=\"nb-drop\" [ngClass]=\"'drop-icon-' + theme.key\"></i>\n        <span>{{ theme.title }}</span>\n      </li>\n    </ul>\n  ",
            styleUrls: ['./theme-switcher-list.component.scss'],
        }),
        __metadata("design:paramtypes", [theme_1.NbThemeService,
            analytics_service_1.AnalyticsService])
    ], ThemeSwitcherListComponent);
    return ThemeSwitcherListComponent;
}());
exports.ThemeSwitcherListComponent = ThemeSwitcherListComponent;
//# sourceMappingURL=themes-switcher-list.component.js.map