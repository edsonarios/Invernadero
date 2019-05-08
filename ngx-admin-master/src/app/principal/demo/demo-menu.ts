import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MENU',
    group: true,
  },
  {
    title: 'producto',
    icon: 'ion-leaf',
    link:'/Principal/Demo/dashboard'
  },
  {
    title: 'Monitoreo',
    icon: 'ion-eye',
    children:[
    {
      title: 'Sensores',
      link:'/Principal/Demo/dashboard'
      
    },
    {
      title: 'Actuadores',
      link:'/Principal/Demo/dashboard'
    },
     {
      title: 'Energia',
      link:'/Principal/Demo/dashboard'
      
    },

    {
      title: 'Camaras de Seguridad',
      link:'/Principal/Demo/dashboard'
    
    },
   
    ],
  }, 
  
  {
    title: 'Control Manual',
    icon: 'ion-gear-b',
    children: [
    {
      title: 'CMActuadores',
      link:'/Principal/Demo/dashboard'
      

    },
    {
      title: 'Horarios de Riego',
      link:'/Principal/Demo/dashboard'
       
    },
    ],
   
  },
  {
    title: 'Reporte',
    icon: 'ion-ios-compose',
    link:'/Principal/Demo/dashboard'
    
  },
   {
    title: 'Info Invernadero',
    icon: 'ion-information',
    link:'/Principal/Demo/dashboard'
    
  },
];
