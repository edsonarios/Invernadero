import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
   {
    title: 'MENU',
    group: true,
  },
  {
    title: 'producto',
    icon: 'ion-leaf',
    link: '/Usuario/Producto/Listar',
  },
  {
    title: 'Monitoreo',
    icon: 'ion-eye',
    children:[
    {
      title: 'Sensores',
      link: '/Usuario/Monitoreo/Sensores',
    },
    {
      title: 'Actuadores',
      link: '/Usuario/Monitoreo/Actuadores',
    },
     {
      title: 'Energia',
      link: '/Usuario/Monitoreo/Energia',
    },
    {
      title: 'Camaras de Seguridad',
      link: '/Usuario/Monitoreo/Camaras',
    },
   
    ],
  }, 
  
  {
    title: 'Control Manual',
    icon: 'ion-gear-b',
    children: [
    {
      title: 'Actuadores',
      link: '/Usuario/Control/Actuadores',

    },
    {
      title: 'Horarios de Riego',
       link: '/Usuario/Control/Horarios',
    },
    ],
   
  },
  {
    title: 'Reporte',
    icon: 'ion-ios-compose',
    link: '/Usuario/Reporte',
  },
   {
    title: 'Info Invernadero',
    icon: 'ion-information',
    link: '/Usuario/Info',
  },
 

  
];
