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
      </div>
    </nb-card>
  `,
})
export class StatusCardOffComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on=false;
   

    
  
}
