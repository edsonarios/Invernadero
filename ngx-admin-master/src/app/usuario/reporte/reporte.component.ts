import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosNoti } from '../../../model/datosNoti';
import { GLOBAL } from '../../../service/global';
import { ReporteService } from '../../../service/reporte.service';
import { fundido } from '../../animation';
import { addSyntheticLeadingComment } from 'typescript';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrustedHtmlString } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'ngx-usuario-Reporte',
  styleUrls: ['./reporte.component.scss'],
  templateUrl: './reporte.component.html',
  providers: [ReporteService],
  animations: [fundido],
  

})
export class ReporteComponent{
  public Controller;
  public url: string;
  contacto: FormGroup;
  formato: [DatosNoti];
  formato2: [DatosNoti];
  public submitted: boolean;

  public idInv=localStorage.getItem('user_inv_id');
  

  constructor(
    private router: Router,
    private notiE: ReporteService,
    private notiV: ReporteService,
    private formBuilder: FormBuilder
  ) { 
    this.submitted = true;

  }


}