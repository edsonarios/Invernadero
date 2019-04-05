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
var user_service_1 = require("../../../../service/user.service");
var animation_1 = require("../../../animation");
var CuentasUsuariosComponent = /** @class */ (function () {
    function CuentasUsuariosComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.role = localStorage.getItem('role');
        //public Usuarios=[];
        //public Administradores=[];
        //public Testers=[];
        this.hiddenUser = 'false';
        this.hiddenAdmin = 'false';
        this.hiddenTester = 'false';
        this.Administradores = [
            { 'nombre': "JUAN CARLOS",
                'Paterno': 'CONDORI',
                'Materno': 'MAMANI',
                'correo': 'juan@admin',
                'status': 'conectado' },
            { 'nombre': "JOSE LUIS",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'jose@admin',
                'status': 'desconectado' }
        ];
        this.Testers = [
            { 'nombre': "Hugo",
                'Paterno': 'Limachi',
                'Materno': 'Huanca',
                'correo': 'Hugo@tester',
                'status': 'desconectado' }
        ];
        this.Usuarios = [
            { 'nombre': "Jorge",
                'Paterno': 'Condori',
                'Materno': 'mamani',
                'correo': 'jorge@user',
                'status': 'conectado' },
            { 'nombre': "Henry",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'henry@user',
                'status': 'conectado' },
            { 'nombre': "Nicolas",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'Nicolas@user',
                'status': 'desconectado' },
            { 'nombre': "Edson",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'Edson@user',
                'status': 'conectado' },
            { 'nombre': "Jorge",
                'Paterno': 'Condori',
                'Materno': 'mamani',
                'correo': 'jorge@user',
                'status': 'conectado' },
            { 'nombre': "Henry",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'henry@user',
                'status': 'desconectado' },
            { 'nombre': "Nicolas",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'Nicolas@user',
                'status': 'conectado' },
            { 'nombre': "Edson",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'Edson@user',
                'status': 'conectado' },
            { 'nombre': "Jorge",
                'Paterno': 'Condori',
                'Materno': 'mamani',
                'correo': 'jorge@user',
                'status': 'conectado' },
            { 'nombre': "Henry",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'henry@user',
                'status': 'desconectado' },
            { 'nombre': "Nicolas",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'Nicolas@user',
                'status': 'desconectado' },
            { 'nombre': "Edson",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'Edson@user',
                'status': 'desconectado' },
            { 'nombre': "Jorge",
                'Paterno': 'Condori',
                'Materno': 'mamani',
                'correo': 'jorge@user',
                'status': 'conectado' },
            { 'nombre': "Henry",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'henry@user',
                'status': 'conectado' },
            { 'nombre': "Nicolas",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'Nicolas@user',
                'status': 'desconectado' },
            { 'nombre': "Edson",
                'Paterno': 'Mamani',
                'Materno': 'Aduviri',
                'correo': 'Edson@user',
                'status': 'conectado' }
        ];
        localStorage.removeItem('admin_user_correo');
        localStorage.removeItem('admin_user_id');
        localStorage.removeItem('admin_user_password');
        /*
            if (localStorage.getItem('role')=='root') {
                this.userService.obtenerAdmins().subscribe(
                    response =>{
                        this.Administradores=response;
                        //console.log(this.admin);
                        if(this.Administradores.length>0){
                            this.hiddenAdmin='true';
                        }
                    },
                    error =>{
                        //console.log(<any>error)
                    }
                    );
            }
        
            this.userService.obtenerUsuarios().subscribe(
                    response =>{
                        this.Usuarios=response;
                        //console.log(this.usuario);
                        if(this.Usuarios.length>0){
                            this.hiddenUser='true';
                        }
                    },
                    error =>{
                        console.log(<any>error)
                    }
                    );
        
            this.userService.obtenerTesters().subscribe(
                    response =>{
                        this.Testers=response;
                        //console.log(this.usuario);
                        if(this.Testers.length>0){
                            this.hiddenTester='true';
                        }
                    },
                    error =>{
                        console.log(<any>error)
                    }
                    );*/
    }
    CuentasUsuariosComponent.prototype.DetalleUsuario = function (id) {
        localStorage.setItem('admin_user_id', id);
        this.router.navigate(['/Administrador/Cuentas/Detalle']);
    };
    CuentasUsuariosComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-cuentas-usuarios',
            styleUrls: ['./cuentas_usuarios.component.scss'],
            templateUrl: './cuentas_usuarios.component.html',
            providers: [user_service_1.UserService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], CuentasUsuariosComponent);
    return CuentasUsuariosComponent;
}());
exports.CuentasUsuariosComponent = CuentasUsuariosComponent;
//# sourceMappingURL=cuentas_usuarios.component.js.map