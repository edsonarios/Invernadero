import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './usuario-menu';
import { UserService } from '../../service/user.service';
import { UsuarioI, InvernaderoI } from '../../model/interfaces';

@Component({
   selector: 'ngx-usuario',
   templateUrl: './usuario.component.html',
   providers: [UserService],
})
export class UsuarioComponent implements OnInit {
   public menu = MENU_ITEMS;

   public hidden = true;
   public exist = true;
   public InvenaderosArray: InvernaderoI[] = [];
   public usuario: UsuarioI;
   public idUsuario;
   constructor(private userService: UserService) {
      this.idUsuario = localStorage.getItem('user_inv_id');
      this.resetUser();
      this.getInvernaderos(this.usuario);
      this.setVisibility();
   }

   ngOnInit() {}

   resetUser() {
      this.usuario = {
         ap_materno: '',
         ap_paterno: '',
         change: '',
         conectado: '',
         correo: '',
         direccion: '',
         nombre: '',
         password: '',
         telefono: '',
         tipo: '',
         id: localStorage.getItem('user_id'),
      };
   }
   getInvernaderos(id) {
      this.userService.getInvernaderos(id).subscribe((res: InvernaderoI[]) => {
         this.InvenaderosArray = [...res];
         const INVERNADERO = this.InvenaderosArray[0];
         if (this.idUsuario === null) {
            localStorage.setItem('user_inv_id', INVERNADERO.id);
         }
         console.log('[USUARIO][InvernaderosArray]', this.InvenaderosArray);
      });
   }
   setVisibility() {
      if (this.InvenaderosArray.length > 1) {
         this.hidden = true;
      } else {
         if (this.InvenaderosArray.length === 0) {
            this.exist = false;
         } else {
            this.hidden = false;
            this.exist = true;
         }
      }
      // this.hidden = this.InvenaderosArray.length > 1 ? true : false;
      // this.exist = this.InvenaderosArray.length === 0 ? false : true;
   }
}
