import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosNoti } from '../../../model/datosNoti';
import { GLOBAL } from '../../../service/global';
import { OpcionesService } from '../../../service/opciones.service';
import { fundido } from '../../animation';
import { addSyntheticLeadingComment } from 'typescript';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrustedHtmlString } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'ngx-usuario-opAvanzadas',
  styleUrls: ['./opciones.component.scss'],
  templateUrl: './opciones.component.html',
  providers: [OpcionesService],
  animations: [fundido],
  

})
export class OpcionesComponent{
  public Controller;
  public url: string;
  contacto: FormGroup;
  formato: [DatosNoti];
  formato2: [DatosNoti];
  public submitted: boolean;

  public idInv=localStorage.getItem('user_inv_id');
  

  constructor(
    private router: Router,
    private notiE: OpcionesService,
    private notiV: OpcionesService,
    private formBuilder: FormBuilder
  ) { 
    this.submitted = true;

  }


}