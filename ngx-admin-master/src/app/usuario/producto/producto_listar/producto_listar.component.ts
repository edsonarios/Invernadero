import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importando los servicios
import { Producto } from '../../../../model/producto';

import { UserService } from '../../../../service/user.service';
import { User } from '../../../../model/user';
import { ProductoService } from '../../../../service/producto.service';
import { ControladorService } from '../../../../service/controladores.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-usuario-producto-listar',
  styleUrls: ['./producto_listar.component.scss'],
  templateUrl: './producto_listar.component.html',
   providers:[ProductoService,UserService,ControladorService],
  animations: [fundido]
})
export class ProductoListarComponent {
public Controller;
public Producto;
public user: User;
Invenaderos;

	
constructor(private router:Router,
		private prodService: ProductoService,
		 private userService: UserService,
		 private ControlService: ControladorService,){	
	localStorage.setItem('route','producto');
}
ngOnInit(){

if(localStorage.getItem('role')=='admin'){
if (localStorage.getItem('user_inv_id')==null) {
	console.log(' EL LOCALSTORAGE NO EXISTE');
	this.user = new User(localStorage.getItem('admin_user_id'),'','','','','','','','','');
   this.userService.ShowInvernaderos(this.user).subscribe(
      response =>{
        this.Invenaderos= response;
       	localStorage.setItem('user_inv_id',this.Invenaderos[0]['id']);
      // 	console.log('se ha instanciado correctamnte: ');
       	//console.log(localStorage.getItem('user_inv_id'));

       	this.prodService.mostrarProductosInvernadero(localStorage.getItem('user_inv_id')).subscribe(
			response =>{
				this.Producto= response;
				//console.log(this.Producto);
			},
			error =>{
				console.log(<any>error)
			}
			);

         },
      error =>{
        console.log(<any>error);
      }
    );

	}
		else{
		this.prodService.mostrarProductosInvernadero(localStorage.getItem('user_inv_id')).subscribe(
			response =>{
				this.Producto= response;
				//console.log(this.Producto);
			},
			error =>{
				console.log(<any>error)
			}
			);
	}
}
else{
	if (localStorage.getItem('user_inv_id')==null) {
	//console.log(' EL LOCALSTORAGE NO EXISTE');
	this.user = new User(localStorage.getItem('user_id'),'','','','','','','','','');
   this.userService.ShowInvernaderos(this.user).subscribe(
      response =>{
        this.Invenaderos= response;
       	localStorage.setItem('user_inv_id',this.Invenaderos[0]['id']);
       //	console.log('se ha instanciado correctamnte: ');
       //	console.log(localStorage.getItem('user_inv_id'));

       	this.prodService.mostrarProductosInvernadero(localStorage.getItem('user_inv_id')).subscribe(
			response =>{
				this.Producto= response;
				//console.log(this.Producto);
			},
			error =>{
				console.log(<any>error)
			}
			);

         },
      error =>{
        console.log(<any>error);
      }
    );

	}
	else{
		this.prodService.mostrarProductosInvernadero(localStorage.getItem('user_inv_id')).subscribe(
			response =>{
				this.Producto= response;
			//	console.log(this.Producto);
			},
			error =>{
				console.log(<any>error)
			}
			);
	}
}

//RECOGE TODOS LOS CONTROLADORES VINCULADOS A ESTE INVERNADERO
  this.ControlService.showControlador(localStorage.getItem('user_inv_id')).subscribe(
      response =>{
        this.Controller=response;
      //  console.log(this.Controller);
        //localStorage.setItem('uuid',this.Controller[0]['uuid']);
      },
      error =>{
        
      }
    );

}
eliminar(){
	console.log('elimina el producto de el invernadero');
}
add(){
	this.router.navigate(['/Usuario/Producto/Agregar']);
}	
}
