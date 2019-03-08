import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-card-close',
  styleUrls: ['./status-card-close.component.scss'],
  template: `
  
    <nb-card  [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ on ? 'ABRIENDO' : 'CERRANDO' }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardCloseComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on=false;
   

    
  
}
