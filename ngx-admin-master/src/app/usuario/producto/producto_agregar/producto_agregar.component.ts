import { Component } from '@angular/core';
import { Router } from '@angular/router';

//importando los servicios
import { Producto } from '../../../../model/producto';
import { GLOBAL } from '../../../../service/global';
import { ProductoService } from '../../../../service/producto.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-usuario-producto-agregar',
  styleUrls: ['./producto_agregar.component.scss'],
  templateUrl: './producto_agregar.component.html',
 providers:[ProductoService],
   animations: [fundido]
})
export class ProductoAgregarComponent {
public prod: Producto;
	
constructor(private router:Router,
		private prodService: ProductoService){	

	this.prodService.ObtenerProductos().subscribe(
			response =>{
				this.prod=response;
				console.log(this.prod);
			},
			error =>{
				console.log(<any>error)
			}
			);
}
volver(){
     this.router.navigateByUrl('/addProducto', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/Usuario/Producto/Listar']));
}
agregar(idProd){
		
	this.prodService.añadirProductoUsuario(localStorage.getItem('user_inv_id'),idProd).subscribe(
			response =>{
				console.log(response);
			},
			error =>{
				console.log(<any>error)
			}
			);

	this.router.navigateByUrl('/addProducto', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/Usuario/Producto/Listar']));
}
	
}
