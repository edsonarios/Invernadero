"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MENU_ITEMS = [
    {
        title: 'MENU',
        group: true,
    },
    {
        title: 'Gestion de Cuentas',
        icon: 'ion-person-stalker',
        children: [
            {
                title: 'Listar Cuentas',
                icon: 'ion-ios-people-outline',
                link: '/Administrador/Cuentas/Usuarios',
            },
            {
                title: 'Crear Cuenta',
                icon: 'ion-ios-personadd-outline',
                link: '/Administrador/Cuentas/Agregar',
            },
        ],
    },
    {
        title: 'Controladores',
        icon: 'ion-network',
        children: [
            {
                title: 'Ver Catalogo',
                icon: 'ion-ios-book-outline',
                link: '/Administrador/Controladores/Catalogo'
            },
            {
                title: 'Añadir Controlador',
                icon: 'ion-ios-plus-outline',
                link: '/Administrador/Controladores/Agregar'
            }
        ]
    },
    {
        title: 'Reportes',
        icon: 'ion-compose',
        link: '/Administrador/Reportes',
        hidden: true,
    },
];
//# sourceMappingURL=administrador-menu.js.map