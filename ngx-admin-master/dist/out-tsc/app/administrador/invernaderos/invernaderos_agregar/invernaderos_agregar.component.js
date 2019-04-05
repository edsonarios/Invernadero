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
//importar servicios
var invernadero_service_1 = require("../../../../service/invernadero.service");
var invernadero_1 = require("../../../../model/invernadero");
var animation_1 = require("../../../animation");
var InvernaderosAgregarComponent = /** @class */ (function () {
    function InvernaderosAgregarComponent(router, invService, fb) {
        this.router = router;
        this.invService = invService;
        this.fb = fb;
        this.imageUrl = "/assets/images/upload-default.png";
        this.fileToUpload = null;
        this.firstForm = this.fb.group({
            DepartamentoCtrl: ['', forms_1.Validators.required],
            ProvinciaCtrl: ['', forms_1.Validators.required],
            UbicacionCtrl: ['', forms_1.Validators.required],
        });
        this.SecondForm = this.fb.group({
            TempMaxCtrl: ['', forms_1.Validators.required],
            TempMinCtrl: ['', forms_1.Validators.required],
            TempIntermitenciaMinCtrl: ['', forms_1.Validators.required],
            TempIntermitenciaSecCtrl: ['', forms_1.Validators.required],
            TempPausaMinCtrl: ['', forms_1.Validators.required],
            TempPausaSecCtrl: ['', forms_1.Validators.required],
            TempMotorMinCtrl: ['', forms_1.Validators.required],
            TempMotorSecCtrl: ['', forms_1.Validators.required],
        });
        this.ThirdForm = this.fb.group({});
        this.inv = new invernadero_1.Invernadero('', '', '', '', '0', '0', '0', '', localStorage.getItem('admin_user_id'), '0', '0');
    }
    InvernaderosAgregarComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        //Show image preview
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    InvernaderosAgregarComponent.prototype.onFirstSubmit = function () {
        this.firstForm.markAsDirty();
    };
    InvernaderosAgregarComponent.prototype.onSecondSubmit = function () {
        this.SecondForm.markAsDirty();
    };
    InvernaderosAgregarComponent.prototype.onThirdSubmit = function () {
        this.ThirdForm.markAsDirty();
    };
    InvernaderosAgregarComponent.prototype.addinv = function (elem) {
        var _this = this;
        //TIEMPO DE iNTERMITENCIA
        var min = elem.target.elements[3].value;
        var sec = elem.target.elements[4].value;
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        this.inv.tiempoIntermitencia = '00:' + min + ':' + sec;
        //TIEMPO DE PAUSA
        var min2 = elem.target.elements[5].value;
        var sec2 = elem.target.elements[6].value;
        if (min2 < 10) {
            min2 = '0' + min2;
        }
        if (sec2 < 10) {
            sec2 = '0' + sec2;
        }
        this.inv.tiempoPausa = '00:' + min2 + ':' + sec2;
        //TIEMPO DE FUNCIONAMIENTO
        var min3 = elem.target.elements[7].value;
        var sec3 = elem.target.elements[8].value;
        if (min3 < 10) {
            min3 = '0' + min3;
        }
        if (sec3 < 10) {
            sec3 = '0' + sec3;
        }
        this.inv.tiempoFuncionMotor = '00:' + min3 + ':' + sec3;
        console.log(this.inv);
        this.invService.Añadir(this.inv).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        this.router.navigateByUrl('/addinv', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Administrador/Cuentas/Detalle']);
        });
    };
    InvernaderosAgregarComponent.prototype.volver = function () {
        var _this = this;
        this.router.navigateByUrl('/desPin', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(['/Administrador/Cuentas/Detalle']);
        });
    };
    InvernaderosAgregarComponent = __decorate([
        core_1.Component({
            selector: 'ngx-administrador-invernaderos-agregar',
            styleUrls: ['./invernaderos_agregar.component.scss'],
            templateUrl: './invernaderos_agregar.component.html',
            providers: [invernadero_service_1.InvernaderoService],
            animations: [animation_1.fundido]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            invernadero_service_1.InvernaderoService,
            forms_1.FormBuilder])
    ], InvernaderosAgregarComponent);
    return InvernaderosAgregarComponent;
}());
exports.InvernaderosAgregarComponent = InvernaderosAgregarComponent;
//# sourceMappingURL=invernaderos_agregar.component.js.map