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
var user_service_1 = require("../../../service/user.service");
var user_1 = require("../../../model/user");
var animation_1 = require("../../animation");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        window.scrollTo(0, 0);
    };
    LoginComponent.prototype.Login = function (e) {
        e.preventDefault();
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        //Convierte todo a minusculas
        username = username.toLowerCase();
        password = password.toLowerCase();
        this.user = new user_1.User('', '', '', '', '', '', '', username, password, '', '');
        if (username == "admin@admin" && password == "1234") {
            this.router.navigate(['/Administrador/Cuentas/Usuarios']);
        }
        if (username == "tester@tester" && password == "1234") {
            this.router.navigate(['/Tester/Cuentas']);
        }
        if (username == "user@user" && password == "1234") {
            this.router.navigate(['/Usuario/Monitoreo']);
        }
        /*
        //obtenemos todo el valor de el usuario
        
        this._userService.SingUp(this.user).subscribe(
                response =>{
    
                    this.identity=response;
                    
                    localStorage.setItem('nombre',this.identity.result['nombre']+" "+this.identity.result['ap_paterno']+" "+this.identity.result['ap_materno']);
                    localStorage.setItem('user_id',this.identity.result['id']);
                    localStorage.setItem('status','enable');
                    
                    if(this.identity.result['tipo']=='user')
                        {
                        localStorage.setItem('role','user');
    
                        this.router.navigate(['/Usuario/Producto/Listar']);
                        }
                    else{
                        if(this.identity.result['tipo']=='root'){
                        localStorage.setItem('role','root');
                        this.router.navigate(['/Administrador/Cuentas/Usuarios']);
                        }
                        else
                        {
                        localStorage.setItem('role','admin');
                        
                        this.router.navigate(['/Administrador/Cuentas/Usuarios']);
                        }
                    }
                
    
                },
                error =>{
                
                this.status='denied'
                window.alert("Denegado");
    
                }
            )*/
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ngx-login',
            styleUrls: ['./login.component.scss'],
            templateUrl: './login.component.html',
            providers: [user_service_1.UserService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map