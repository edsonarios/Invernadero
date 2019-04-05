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
var usuario_menu_1 = require("./usuario-menu");
var router_1 = require("@angular/router");
var user_service_1 = require("../../service/user.service");
var user_1 = require("../../model/user");
var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(router, userService) {
        /*if (localStorage.getItem('status')==null) {
          this.router.navigate(['/Principal/Inicio']);
          window.alert('usted no tiene acceso');
        }else{
          this.dato=localStorage.getItem('user_inv_id');
        }*/
        this.router = router;
        this.userService = userService;
        this.hidden = 'true';
        this.exist = 'true';
        this.menu = usuario_menu_1.MENU_ITEMS;
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        //--ADMINISTRADOR--
        if (localStorage.getItem('role') == 'admin' || localStorage.getItem('role') == 'root') {
            this.user = new user_1.User(localStorage.getItem('admin_user_id'), '', '', '', '', '', '', '', '', '', '');
            this.userService.ShowInvernaderos(this.user).subscribe(function (response) {
                _this.Invenaderos = response;
                //console.log(this.Invenaderos);
                //comprueba si existe un invernadero instanciado de forma local y si no este mismo lo asigna
                if (localStorage.getItem('user_inv_id') == null && _this.Invenaderos.length >= 1) {
                    localStorage.setItem('user_inv_id', _this.Invenaderos[0]['id']);
                    _this.dato = localStorage.getItem('user_inv_id');
                }
                if (_this.Invenaderos.length > 1) {
                    _this.hidden = 'true';
                }
                else {
                    if (_this.Invenaderos.length == 0) {
                        _this.exist = 'false';
                    }
                    else {
                        _this.hidden = 'false';
                        _this.exist = 'true';
                    }
                }
                //console.log(this.exist);
            }, function (error) {
                console.log(error);
            });
        }
        //--USUARIO--
        else {
            this.user = new user_1.User(localStorage.getItem('user_id'), '', '', '', '', '', '', '', '', '', '');
            this.userService.ShowInvernaderos(this.user).subscribe(function (response) {
                _this.Invenaderos = response;
                //console.log(this.Invenaderos);
                //comprueba si existe un invernadero instanciado de forma local y si no este mismo lo asigna
                if (localStorage.getItem('user_inv_id') == null && _this.Invenaderos.length >= 1) {
                    localStorage.setItem('user_inv_id', _this.Invenaderos[0]['id']);
                    _this.dato = localStorage.getItem('user_inv_id');
                }
                if (_this.Invenaderos.length > 1) {
                    _this.hidden = 'true';
                }
                else {
                    if (_this.Invenaderos.length == 0) {
                        _this.exist = 'false';
                    }
                    else {
                        _this.hidden = 'false';
                        _this.exist = 'true';
                    }
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    UsuarioComponent = __decorate([
        core_1.Component({
            selector: 'ngx-usuario',
            template: "\n    <ngx-one-column-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet *ngIf=\"exist=='true'\"> \n      <!--\n       <div class=\"col-md-6 offset-md-3\" *ngIf=\"hidden=='true'\">\n       <span align=\"center\"><h6>Seleccione su Invernadero</h6></span>\n       <nb-card>\n        <nb-card-body>\n       <div class=\"btn-group\">\n       <div class=\"\" *ngFor=\"let n of Invenaderos; let i=index\">\n       \n        <button class=\"btn btn-outline-success \" (click)=\"GuardaID(Invenaderos[i]['id'])\" *ngIf=\"Invenaderos[i]['id']!=dato\">\n        {{i+1}}\n        </button>\n        <button class=\"btn btn-success \" (click)=\"GuardaID(Invenaderos[i]['id'])\" *ngIf=\"Invenaderos[i]['id']==dato\">\n        {{i+1}}\n        </button>\n\n       \n        </div>\n       </div>\n       </nb-card-body>\n       </nb-card>\n       </div>-->\n      </router-outlet>\n    </ngx-one-column-layout>\n  ",
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], UsuarioComponent);
    return UsuarioComponent;
}());
exports.UsuarioComponent = UsuarioComponent;
//# sourceMappingURL=usuario.component.js.map