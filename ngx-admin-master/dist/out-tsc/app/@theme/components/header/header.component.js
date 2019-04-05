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
var theme_1 = require("@nebular/theme");
var analytics_service_1 = require("../../../@core/utils/analytics.service");
require("rxjs/add/operator/map");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, 
    //     private userService: UserService,
    analyticsService, router) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.analyticsService = analyticsService;
        this.router = router;
        this.status = localStorage.getItem('role');
        this.position = 'normal';
        this.userMenu = [];
        this.tag = 'my-context-menu';
        if (localStorage.getItem('role') != null) {
            if (this.status == "user") {
                this.userMenu = [{ title: 'Mi Perfil', link: '/Usuario/Cuenta/Perfil' }, { title: 'Desconectarse', link: '/Principal/Inicio' }];
            }
            if (this.status == "admin" || this.status == "root") {
                this.userMenu = [{ title: 'Mi Perfil', link: '/Administrador/Cuentas/Perfil' }, { title: 'Gestionar', link: '/Administrador/Cuentas/Usuarios' }, { title: 'Desconectarse', link: '/Principal/Inicio' }];
            }
        }
        else {
            this.userMenu = [{ title: 'Mi Perfil' }, { title: 'Desconectarse', link: '/Principal/Inicio' }];
        }
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Agrega los nombres
        if (this.status == null) {
            this.user = { name: 'Nelson Richard Cori Sirpa', picture: 'assets/images/nick.jpg' };
        }
        else {
            this.user = { name: localStorage.getItem('nombre'), picture: 'assets/images/user_default.png' };
        }
        this.menuService.onItemClick().subscribe(function (event) {
            _this.onItemSelection(event.item.title);
        });
    };
    HeaderComponent.prototype.onItemSelection = function (title) {
        /*if ( title === 'Log out' ) {
          // Do something on Log out
          console.log('Log out Clicked ')
        } else if ( title === 'Profile' ) {
          // Do something on Profile
          console.log('Profile Clicked ')
        }
        console.log("==================");
        console.log(title);
        console.log("==================");
        */
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    HeaderComponent.prototype.user_mail = function () {
        this.router.navigate(['/Usuario/Mensajes/Bandeja']);
    };
    HeaderComponent.prototype.admin_mail = function () {
        this.router.navigate(['/Administrador/Mensajes/Bandeja']);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "position", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'ngx-header',
            styleUrls: ['./header.component.scss'],
            templateUrl: './header.component.html',
        }),
        __metadata("design:paramtypes", [theme_1.NbSidebarService,
            theme_1.NbMenuService,
            analytics_service_1.AnalyticsService,
            router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map