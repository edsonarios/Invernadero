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
var forms_1 = require("@angular/forms");
//importar servicio, 
var user_1 = require("../../../../model/user");
var user_service_1 = require("../../../../service/user.service");
var animation_1 = require("../../../animation");
var CuentasAgregarComponent = /** @class */ (function () {
    function CuentasAgregarComponent(router, userService, fb) {
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.role = localStorage.getItem('role');
        if (localStorage.getItem('role') == 'root') {
            this.user = new user_1.User('', '', '', '', '', '', '', '', '', 'false', 'true');
        }
        else {
            this.user = new user_1.User('', '', '', '', 'user', '', '', '', '', 'false', 'true');
        }
    }
    CuentasAgregarComponent.prototype.ngOnInit = function () {
        this.firstForm = this.fb.group({
            NombreCtrl: ['', forms_1.Validators.required],
            ApPatCtrl: ['', forms_1.Validators.required],
            ApMatCtrl: ['', forms_1.Validators.required],
            DirecCtrl: ['', forms_1.Validators.required],
            TelCtrl: ['', forms_1.Validators.required],
            CorreoCtrl: ['', [forms_1.Validators.required, forms_1.Validators.email]],
        });
        this.secondForm = this.fb.group({
        // secondCtrl: ['', Validators.required],
        });
        this.thirdForm = this.fb.group({
            PassCtrl: ['', forms_1.Validators.required],
        });
    };
    CuentasAgregarComponent.prototype.prueba = function () {
        console.log(this.user);
    };
    CuentasAgregarComponent.prototype.onFirstSubmit = function () {
        this.firstForm.markAsDirty();
    };
    CuentasAgregarComponent.prototype.onSecondSubmit = function () {
        this.secondForm.markAsDirty();
    };
    CuentasAgregarComponent.prototype.onThirdSubmit = function () {
        this.thirdForm.markAsDirty();
    };
    CuentasAgregarComponent.prototype.AgregaCuenta = function () {
        var _this = this;
        console.log(this.user);
        this.userService.register(this.user).subscribe(function (response) {
            _this.user = response.user;
        }, function (error) {
            console.log(error);
        });
    };
    CuentasAgregarComponent.prototype.SelectAdmin = function () {
        this.user.tipo = 'admin';
    };
    CuentasAgregarComponent.prototype.SelectTester = function () {
        this.user.tipo = 'tester';
    };
    CuentasAgregarComponent.prototype.SelectUser = function () {
        this.user.tipo = 'user';
    };
    CuentasAgregarComponent.prototype.volver = function () {
        this.router.navigate(['/Administrador/Cuentas/Usuarios']);
    };
    CuentasAgregarComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-cuentas-agregar',
            styleUrls: ['./cuentas_agregar.component.scss'],
            templateUrl: './cuentas_agregar.component.html',
            providers: [user_service_1.UserService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService,
            forms_1.FormBuilder])
    ], CuentasAgregarComponent);
    return CuentasAgregarComponent;
}());
exports.CuentasAgregarComponent = CuentasAgregarComponent;
//# sourceMappingURL=cuentas_agregar.component.js.map