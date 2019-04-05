"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'ngx-footer',
            styleUrls: ['./footer.component.scss'],
            template: "\n    <span class=\"created-by\">&copy; 2019  PATELECOM S.R.L.  <br>Todos los derechos reservados\n        </span>\n\n    <div class=\"socials\">\n    <!--<small style=\"float:right;\"><h6>Desarrollado por: <a href=\"https://www.facebook.com/nelsonrichardc\" target=\"_blank\">RichardSon</a></h6></small>-->\n      <h6>v.3.0</h6>\n      <!--<a href=\"#\" target=\"_blank\" class=\"ion ion-social-github\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-facebook\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-twitter\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-linkedin\"></a>-->\n    </div>\n  ",
        })
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map