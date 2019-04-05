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
var operators_1 = require("rxjs/operators");
var theme_1 = require("@nebular/theme");
var state_service_1 = require("../../../@core/data/state.service");
var OneColumnLayoutComponent = /** @class */ (function () {
    function OneColumnLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.layout = {};
        this.sidebar = {};
        this.alive = true;
        this.stateService.onLayoutState()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (layout) { return _this.layout = layout; });
        this.stateService.onSidebarState()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuService.onItemSelect()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }), operators_1.withLatestFrom(this.themeService.onMediaQueryChange()), operators_1.delay(20))
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    OneColumnLayoutComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    OneColumnLayoutComponent = __decorate([
        core_1.Component({
            selector: 'ngx-one-column-layout',
            styleUrls: ['./one-column.layout.scss'],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [state_service_1.StateService,
            theme_1.NbMenuService,
            theme_1.NbThemeService,
            theme_1.NbMediaBreakpointsService,
            theme_1.NbSidebarService])
    ], OneColumnLayoutComponent);
    return OneColumnLayoutComponent;
}());
exports.OneColumnLayoutComponent = OneColumnLayoutComponent;
//# sourceMappingURL=one-column.layout.js.map