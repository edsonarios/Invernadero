import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//importar servicios
import { InvernaderoService } from '../../../../service/invernadero.service';
import { Invernadero } from '../../../../model/invernadero';
import { UploadService } from '../../../../service/upload.service';
import { GLOBAL } from '../../../../service/global';

import { fundido } from '../../../animation';
@Component({
   selector: 'ngx-administrador-invernaderos-agregar',
   styleUrls: ['./invernaderos_agregar.component.scss'],
   templateUrl: './invernaderos_agregar.component.html',
   providers: [InvernaderoService, UploadService],
   animations: [fundido],
})
export class InvernaderosAgregarComponent {
   firstForm: FormGroup;
   SecondForm: FormGroup;
   ThirdForm: FormGroup;

   public inv: Invernadero;

   imageUrl: string = '/assets/images/upload-default.png';
   fileToUpload: File = null;
   public url: string;
   public filesToUpload: Array<File>;

   constructor(
      private router: Router,
      private invService: InvernaderoService,
      private fb: FormBuilder,
      private uploadService: UploadService
   ) {
      console.log('invernaderos_agregar funcionando');

      this.url = GLOBAL.url;

      this.firstForm = this.fb.group({
         DepartamentoCtrl: ['', Validators.required],
         ProvinciaCtrl: ['', Validators.required],
         UbicacionCtrl: ['', Validators.required],
      });

      this.SecondForm = this.fb.group({
         TempMaxCtrl: ['', Validators.required],
         TempMediaCtrl: ['', Validators.required],
         TempMinCtrl: ['', Validators.required],
         TempIntermitenciaCtrl: ['', Validators.required],
         TempPausaCtrl: ['', Validators.required],
         TempMotorCtrl: ['', Validators.required],
      });
      this.ThirdForm = this.fb.group({});

      this.inv = new Invernadero(
         '',
         '',
         '',
         '',
         '35',
         '27',
         '20',
         '00:00:00',
         localStorage.getItem('admin_user_id'),
         '00:00:00',
         '00:00:00',
         ''
      );
   }

   showInv() {
      console.log('Invernadero Actualmente');
      console.log(this.inv);
   }
   handleFileInput(file: FileList, fileInput: any) {
      this.fileToUpload = file.item(0);
      console.log(this.fileToUpload);

      //Show image preview
      var reader = new FileReader();
      reader.onload = (event: any) => {
         this.imageUrl = event.target.result;
      };
      reader.readAsDataURL(this.fileToUpload);

      this.filesToUpload = <Array<File>>fileInput.target.files;
   }

   onFirstSubmit() {
      this.firstForm.markAsDirty();
   }

   onSecondSubmit() {
      this.SecondForm.markAsDirty();
   }
   onThirdSubmit() {
      this.ThirdForm.markAsDirty();
   }
   AgregaInvernadero() {
      //console.log('LA URL ES: '+this.url+'guardarImagen');
      //console.log('ENTRA AL METODO');
      this.uploadService
         .makeFileRequest(
            this.url + 'guardarImagen',
            [],
            this.filesToUpload,
            '',
            'image'
         )
         .then((result: any) => {
            this.inv.logo = result.image;

            //console.log("Nombre Result:"+result['nombre']);
            this.inv.logo = result['nombre'];

            this.invService.Añadir(this.inv).subscribe(
               (response) => {
                  console.log(response);
               },
               (error) => {
                  console.log(<any>error);
               }
            );
         });
   }

   addinv(elem) {
      //TIEMPO DE iNTERMITENCIA
      var min = elem.target.elements[3].value;
      var sec = elem.target.elements[4].value;
      if (min < 10) {
         min = '0' + min;
      }
      if (sec < 10) {
         sec = '0' + sec;
      }
      this.inv.tiempoIntermitencia = '00:' + min + ':' + sec;
      //TIEMPO DE PAUSA
      var min2 = elem.target.elements[5].value;
      var sec2 = elem.target.elements[6].value;
      if (min2 < 10) {
         min2 = '0' + min2;
      }
      if (sec2 < 10) {
         sec2 = '0' + sec2;
      }

      this.inv.tiempoPausa = '00:' + min2 + ':' + sec2;
      //TIEMPO DE FUNCIONAMIENTO
      var min3 = elem.target.elements[7].value;
      var sec3 = elem.target.elements[8].value;
      if (min3 < 10) {
         min3 = '0' + min3;
      }
      if (sec3 < 10) {
         sec3 = '0' + sec3;
      }
      this.inv.tiempoFuncionMotor = '00:' + min3 + ':' + sec3;

      console.log(this.inv);

      this.invService.Añadir(this.inv).subscribe(
         (response) => {
            console.log(response);
         },
         (error) => {
            console.log(<any>error);
         }
      );
      this.router
         .navigateByUrl('/addinv', { skipLocationChange: true })
         .then(() => this.router.navigate(['/Administrador/Cuentas/Detalle']));
   }
   volver() {
      this.router
         .navigateByUrl('/desPin', { skipLocationChange: true })
         .then(() => this.router.navigate(['/Administrador/Cuentas/Detalle']));
   }
}
