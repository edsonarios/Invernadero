import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
   {
    title: 'MENU',
    group: true,
  },
  {
    title: 'producto',
    icon: 'ion-leaf',
    link: '/pages/producto',
  },
  {
    title: 'Monitoreo',
    icon: 'ion-eye',
    children:[
    {
      title: 'Sensores',
      link: '/pages/monitoreo/sensores',
    },
    {
      title: 'Actuadores',
      link: '/pages/monitoreo/actuadores',
    },
     {
      title: 'Bateria',
      link: '/pages/monitoreo/bateria',
    },

    {
      title: 'Camaras de Seguridad',
      link: '/pages/monitoreo/camaras',
    },
   
    ],
  }, 
  
  {
    title: 'Control Manual',
    icon: 'ion-gear-b',
    children: [
    {
      title: 'Actuadores',
      link: '/pages/control/actuadores',

    },
    {
      title: 'Horarios de Riego',
       link: '/pages/control/horarios',
    },
    ],
   
  },
  {
    title: 'Reporte',
    icon: 'ion-ios-compose',
    link: '/pages/reporte',
  },
   {
    title: 'Info Invernadero',
    icon: 'ion-information',
    link: '/pages/info',
  },
 

  
];
