import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importar servicio, 
import { User } from '../../../../model/user';
import { UserService } from '../../../../service/user.service';
import { InvernaderoService } from '../../../../service/invernadero.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-cuentas-detalle',
  styleUrls: ['./cuentas_detalle.component.scss'],
  templateUrl: './cuentas_detalle.component.html',
 providers: [UserService,InvernaderoService],
    animations: [fundido]
})
export class CuentasDetalleComponent {

  public isCollapsed = false;

public user: User;
  public identity;
  public Invernaderos;
  //datos de el usuario
  public nombre;
  public ap_paterno;
  public ap_materno;
  public direccion;
  public telefono;
  public correo;
  public password;
public role;
	
constructor(private router:Router,
    private userService: UserService,
    public invService: InvernaderoService){	



this.user = new User(localStorage.getItem('admin_user_id'),'','','','','','',localStorage.getItem('admin_user_correo'),localStorage.getItem('admin_user_password'),'');
//console.log(this.user);
  //Obtenemos todo el valor de el usuario
  this.userService.SingUp(this.user).subscribe(
      response =>{
        this.identity=response;
        //console.log(this.identity);

        this.nombre=this.identity.result['nombre'];
        this.ap_paterno=this.identity.result['ap_paterno'];
        this.ap_materno=this.identity.result['ap_materno'];
        this.direccion=this.identity.result['direccion'];
        this.telefono=this.identity.result['telefono'];
        this.correo=this.identity.result['correo'];
        this.password=this.identity.result['password'];
        this.role=this.identity.result['tipo'];
      },
      error =>{
        
      }
    )

   //obtenemos el total de los invernaderos
   this.userService.ShowInvernaderos(this.user).subscribe(
      response =>{
        this.Invernaderos= response;
        //console.log(this.Invernaderos);
       //console.log(this.exist);
         },
      error =>{
        console.log(<any>error);
      }
    );
    
}
DetalleInvernadero(id){
  
  localStorage.setItem('admin_user_inv_id',id);
 this.router.navigate(['/Administrador/Invernaderos/Detalle']);
  
}

volver(){
this.router.navigate(['/Administrador/Cuentas/Usuarios']);
}
dashboard(){
this.router.navigate(['/Usuario/Producto/Listar']);
localStorage.setItem('route','producto');
}
editar(){
this.router.navigate(['/Administrador/Cuentas/Editar']);
}
eliminar(){
this.userService.deleteUser(localStorage.getItem('admin_user_id')).subscribe(
      response =>{
        
        console.log(response);
       //console.log(this.exist);
         },
      error =>{
        console.log(<any>error);
      }
    )

  this.router.navigateByUrl('/eliminar', {skipLocationChange: true}).then(()=>
  this.router.navigate(['/Administrador/Cuentas/Usuarios']));
  
}

}
