import { Component } from '@angular/core';

import { Router } from '@angular/router';


//importando los servicios
import { Producto } from '../../../../model/producto';
import { GLOBAL } from '../../../../service/global';
import { ProductoService } from '../../../../service/producto.service';

import { fundido } from '../../../../animation';
@Component({
  selector: 'ngx-producto-add',
  //styleUrls: ['./edit.component.scss'],
  templateUrl: './add.component.html',
  providers:[ProductoService],
   animations: [fundido]
})
export class AddProductoComponent {
	public prod: Producto;
constructor(
		private router:Router,
		private prodService: ProductoService,
		){}

ngOnInit(){

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
    this.router.navigate(['/pages/producto']));
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
    this.router.navigate(['/pages/producto']));
}


}
