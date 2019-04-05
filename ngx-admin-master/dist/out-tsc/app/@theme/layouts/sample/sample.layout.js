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
// TODO: move layouts into the framework
var SampleLayoutComponent = /** @class */ (function () {
    function SampleLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
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
    SampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SampleLayoutComponent = __decorate([
        core_1.Component({
            selector: 'ngx-sample-layout',
            styleUrls: ['./sample.layout.scss'],
            template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" >\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [state_service_1.StateService,
            theme_1.NbMenuService,
            theme_1.NbThemeService,
            theme_1.NbMediaBreakpointsService,
            theme_1.NbSidebarService])
    ], SampleLayoutComponent);
    return SampleLayoutComponent;
}());
exports.SampleLayoutComponent = SampleLayoutComponent;
//# sourceMappingURL=sample.layout.js.map