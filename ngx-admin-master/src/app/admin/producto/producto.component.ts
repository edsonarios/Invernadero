import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
//importando los servicios
import { Producto } from '../../model/producto';
import { GLOBAL } from '../../service/global';
import { ProductoService } from '../../service/producto.service';
import { fundido } from '../../animation';
 
@Component({
  selector: 'ngx-productos',
  styleUrls: ['./producto.component.scss'],
  templateUrl: './producto.component.html',
	providers:[ProductoService],
	 animations: [fundido]

})
export class ProductoComponent implements OnInit {


public prod: Producto;
public url:string;

constructor(
		private router:Router,
		private prodService: ProductoService
		){

	this.url=GLOBAL.url;
}

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
eliminar(idProd){
this.prodService.EliminaProducto(idProd).subscribe(
			response =>{
				this.prod=response;
				console.log(this.prod);
			},
			error =>{
				console.log(<any>error)
			}
			);

this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/admin/product']));
}




}
