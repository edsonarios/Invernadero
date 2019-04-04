import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importando los servicios
import { Producto } from '../../../../model/producto';
import { ProductoService } from '../../../../service/producto.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-producos-catalogo',
  styleUrls: ['./productos_catalogo.component.scss'],
  templateUrl: './productos_catalogo.component.html',
  providers:[ProductoService],
  animations: [fundido]

})
export class ProductosCatalogoComponent {
public prod: Producto;
	
constructor(private router:Router,
			private prodService: ProductoService){	

			this.prodService.ObtenerProductos().subscribe(
			response =>{
				this.prod=response;
				//console.log(this.prod);
			},
			error =>{
				console.log(<any>error)
			}
			);	
}
agregar(){
  this.router.navigate(['/Administrador/Productos/Agregar']);
}
eliminar(idProd){
this.prodService.EliminaProducto(idProd).subscribe(
			response =>{
				this.prod=response;
				//console.log(this.prod);
			},
			error =>{
				//console.log(<any>error)
			}
			);

this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/Administrador/Productos/Catalogo']));
}

}
