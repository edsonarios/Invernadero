import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importar servicios 
import { DispositivoService } from '../../../../service/dispositivos.service';
import { UploadService } from '../../../../service/upload.service';
import { GLOBAL } from '../../../../service/global';
import { fundido } from '../../../animation';
@Component({
  selector: 'ngx-administrador-controladores-agregar',
  styleUrls: ['./controladores_agregar.component.scss'],
  templateUrl: './controladores_agregar.component.html',
  providers:[DispositivoService,UploadService],
  animations: [fundido]
 
})
export class ControladoresAgregarComponent {
  imageUrl: string = "/assets/images/upload-default.png";
  fileToUpload: File = null;

	public url:string;
  public filesToUpload: Array<File>;
constructor(
	private router:Router,
	private dispositiveService: DispositivoService,
	private uploadService: UploadService){	
		this.url=GLOBAL.url;
}
volver(){
		this.router.navigate(['/Administrador/Controladores/Catalogo'])
	}

	 handleFileInput(file: FileList,fileInput:any) {

    this.fileToUpload = file.item(0);
    console.log(this.fileToUpload);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);

    this.filesToUpload=<Array<File>>fileInput.target.files;
  }
	addControlador(e){
		e.preventDefault();
		var modelo=e.target.elements[0].value;
		var marca=e.target.elements[1].value;
		var nroPD=e.target.elements[2].value;
		var nroPA=e.target.elements[3].value;
		console.log(modelo);
		console.log(marca);
		console.log(nroPD);
		console.log(nroPA);
		var image;

		this.uploadService.makeFileRequest(this.url+'guardarImagen',[],this.filesToUpload,'','image').then((result:any)=>{image=result.image;
					
					
					//console.log("Nombre Result:"+result['nombre']);
					image=result['nombre'];
					
					this.dispositiveService.crearDispositivo(modelo,marca,nroPD,nroPA,image).subscribe(
							response =>{
								console.log(response);
							},
							error =>{
								console.log(<any>error)
							}
							);

		this.router.navigate(['/Administrador/Controladores/Catalogo'])
	});

}
}
