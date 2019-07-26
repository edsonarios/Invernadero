import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosNoti } from '../../../model/datosNoti';
import { GLOBAL } from '../../../service/global';
import { NotificationService } from '../../../service/notificaciones.service';
import { fundido } from '../../animation';
import { addSyntheticLeadingComment } from 'typescript';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrustedHtmlString } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'ngx-usuario-notificaciones',
  styleUrls: ['./notificaciones.component.scss'],
  templateUrl: './notificaciones.component.html',
  providers: [NotificationService],
  animations: [fundido],
  

})
export class NotificacionesComponent implements OnInit {
  public Controller;
  public notificationsE;
  public notificationsV;
  public url: string;
  contacto: FormGroup;
  formato: [DatosNoti];
  formato2: [DatosNoti];
  public submitted: boolean;

  public idInv=localStorage.getItem('user_inv_id');
  

  constructor(
    private router: Router,
    private notiE: NotificationService,
    private notiV: NotificationService,
    private formBuilder: FormBuilder
  ) { 
    this.submitted = true;
    /*
      localStorage.setItem('route','notficaciones');
      this.url=GLOBAL.url;
      this.notiE.notificationError(localStorage.getItem('user_inv_id'),'fecha').subscribe(
        response => {
          this.notificationsE = response;
          console.log(this.notiE);
        },
        error => {

        }
      );
    */  
  }

  ngOnInit(){
    this.contacto = this.formBuilder.group({
        id: ['', Validators.required],
        fecha:['',Validators.required],
    })
  }

  get f(){
    return this.contacto.controls;
  }

  onSubmit(){
    this.submitted = false;
    if(!this.contacto.invalid){
      return;
    }
    alert('Mensaje enviado...');

  }

  obtener(){
    console.log('identificador de usuario: '+this.idInv);
    
    this.notiE.notificationError(this.idInv,this.contacto.value)

    .subscribe(
      rt => {
        this.formato=rt;
        console.log(this.formato);
      },
      er => console.log(er),
      () => console.log('terminado')
    );
    console.log(this.contacto.value);
  }

  obtener2(){
    console.log('identificador de usuario: '+this.idInv);
    
    this.notiE.notificationFunci(this.idInv,this.contacto.value)

    .subscribe(
      rt => {
        this.formato2=rt;
        console.log(this.formato2);
      },
      er => console.log(er),
      () => console.log('terminado')
    );
  }

}