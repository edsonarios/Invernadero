import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
//importando los servicios
import { Producto } from '../../model/producto';

import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { ProductoService } from '../../service/producto.service';

import { fundido } from '../../animation';

@Component({
  selector: 'ngx-producto',
  styleUrls: ['./producto.component.scss'],
  templateUrl: './producto.component.html',
  providers:[ProductoService,UserService],
  animations: [fundido]
})
export class ProductoComponent implements OnInit{
public Producto;
public user: User;
Invenaderos;


constructor(
		private router:Router,
		private prodService: ProductoService,
		 private userService: UserService
		){
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
       	console.log('se ha instanciado correctamnte: ');
       	console.log(localStorage.getItem('user_inv_id'));

       	this.prodService.mostrarProductosInvernadero(localStorage.getItem('user_inv_id')).subscribe(
			response =>{
				this.Producto= response;
				console.log(this.Producto);
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
				console.log(this.Producto);
			},
			error =>{
				console.log(<any>error)
			}
			);
	}
}
else{
	if (localStorage.getItem('user_inv_id')==null) {
	console.log(' EL LOCALSTORAGE NO EXISTE');
	this.user = new User(localStorage.getItem('user_id'),'','','','','','','','','');
   this.userService.ShowInvernaderos(this.user).subscribe(
      response =>{
        this.Invenaderos= response;
       	localStorage.setItem('user_inv_id',this.Invenaderos[0]['id']);
       	console.log('se ha instanciado correctamnte: ');
       	console.log(localStorage.getItem('user_inv_id'));

       	this.prodService.mostrarProductosInvernadero(localStorage.getItem('user_inv_id')).subscribe(
			response =>{
				this.Producto= response;
				console.log(this.Producto);
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
				console.log(this.Producto);
			},
			error =>{
				console.log(<any>error)
			}
			);
	}
}

}
eliminar(){
	console.log('elimina el producto de el invernadero');
}



}
