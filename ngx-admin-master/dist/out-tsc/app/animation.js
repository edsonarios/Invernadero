"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.fundido = animations_1.trigger('fadeIn', [
    animations_1.transition(':enter', [
        animations_1.style({
            opacity: 0,
            transform: 'translateX(-40%)'
        }),
        animations_1.animate('300ms ease-in', animations_1.style({
            opacity: 1,
            transform: 'translateX(0%)'
        }))
    ])
]);
//# sourceMappingURL=animation.js.map