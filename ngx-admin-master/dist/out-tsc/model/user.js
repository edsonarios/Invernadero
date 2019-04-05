"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, nombre, ap_paterno, ap_materno, tipo, direccion, telefono, correo, password, conectado, change) {
        this.id = id;
        this.nombre = nombre;
        this.ap_paterno = ap_paterno;
        this.ap_materno = ap_materno;
        this.tipo = tipo;
        this.direccion = direccion;
        this.telefono = telefono;
        this.correo = correo;
        this.password = password;
        this.conectado = conectado;
        this.change = change;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map