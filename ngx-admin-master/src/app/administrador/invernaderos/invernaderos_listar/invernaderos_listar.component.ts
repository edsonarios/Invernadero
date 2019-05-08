import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../../model/user';
import { UserService } from '../../../../service/user.service';
import { InvernaderoService } from '../../../../service/invernadero.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-invernaderos-listar',
  styleUrls: ['./invernaderos_listar.component.scss'],
  templateUrl: './invernaderos_listar.component.html',
  providers: [UserService,InvernaderoService],
    animations: [fundido]
})
export class InvernaderosListarComponent {
 public NumberInvernaderos=0;
	public user: User;
  public Invernaderos;
constructor(
		private router:Router,
    private userService: UserService,
    public invService: InvernaderoService){	

  this.user = new User(localStorage.getItem('admin_user_id'),'','','','','','','','','','');
//console.log(this.user);


   //obtenemos el total de los invernaderos
   this.userService.ShowInvernaderos(this.user).subscribe(
      response =>{
        this.Invernaderos= response;
        console.log(this.Invernaderos);
        this.NumberInvernaderos= this.Invernaderos.length;
        console.log("USTED POSEE: "+ this.NumberInvernaderos+" Invernaderos");
       //console.log(this.exist);
         },
      error =>{
        console.log(<any>error);
      }
    );
    
}
dashboard(){
this.router.navigate(['/Usuario/Monitoreo']);
localStorage.setItem('route','monitoreo');
}
volver(){
	this.router.navigate(['/Administrador/Cuentas/Detalle']);
}
Agregar(){
	this.router.navigate(['/Administrador/Invernaderos/Agregar']);
}

VerInvernadero(id){
  localStorage.setItem('admin_user_inv_id',id);
  this.router.navigate(['/Administrador/Invernaderos/Detalle']);
}

}
