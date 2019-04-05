import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-card-off',
  styleUrls: ['./status-card-off.component.scss'],
  template: `
  
    <nb-card (click)="on = !on" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ on ? 'ENCENDIDO' : 'APAGADO' }}</div>
        <span class="text-success" *ngIf="Tipo=='Bomba'&&Flujo=='true'">Existe Flujo de Agua</span>
        <span class="text-danger" *ngIf="Tipo=='Bomba'&&Flujo=='false'">No Existe Flujo de Agua</span>
      </div>
    </nb-card>
  `,
})
export class StatusCardOffComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on=false;
  @Input() Flujo: string;
  @Input() Tipo: string;

    
  
}
