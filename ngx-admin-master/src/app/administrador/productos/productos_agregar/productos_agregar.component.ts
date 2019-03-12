import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importar servicio, 
import { Producto } from '../../../../model/producto';
import { GLOBAL } from '../../../../service/global';
import { ProductoService } from '../../../../service/producto.service';
import { UploadService } from '../../../../service/upload.service';

import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-producos-agregar',
  styleUrls: ['./productos_agregar.component.scss'],
  templateUrl: './productos_agregar.component.html',
 providers:[ProductoService,UploadService],
   animations: [fundido]
})
export class ProductosAgregarComponent {
public prod: Producto;
	public Semanas;
	public Dias;
	public url:string;

	public filesToUpload: Array<File>;
	
constructor(private router:Router,
		private prodService: ProductoService,
		private uploadService: UploadService){	

		this.prod = new Producto('','','','','','');
		this.Semanas;
		this.Dias;
		this.url=GLOBAL.url;
}
addProd(){
		console.log('LA URL ES: '+this.url+'guardarImagen');
		console.log('ENTRA AL METODO');
		this.uploadService.makeFileRequest(this.url+'guardarImagen',[],this.filesToUpload,'','image').then((result:any)=>{this.prod.imagen=result.image;
					
					
					console.log(result['nombre']);
					this.prod.imagen=result['nombre'];
					
								if(this.Semanas<10)
			        {
			          this.Semanas='0'+this.Semanas;
			        }
			        if(this.Dias<10)
			        {
			          this.Dias='0'+this.Dias;
			        }
			     
					this.prod.tiempoProduccion=this.Semanas+'s-'+this.Dias+'d';
					console.log(this.prod);
					
					this.prodService.añadirProducto(this.prod).subscribe(
						response =>{
							console.log(response);
						},
						error =>{
							console.log(<any>error)
						}
					)

							});
					

		
				
		 
       
		this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/Administrador/Productos/Catalogo']));
		
	}
	volver(){
		this.router.navigateByUrl('/producto', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/Administrador/Productos/Catalogo']));

	}

	

	fileChangeEvent(fileInput:any){
		this.filesToUpload=<Array<File>>fileInput.target.files;
		console.log(this.filesToUpload);
	}

}
