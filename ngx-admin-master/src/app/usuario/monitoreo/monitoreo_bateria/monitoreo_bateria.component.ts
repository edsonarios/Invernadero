import { Component } from '@angular/core';
import { fundido } from '../../../animation';
import * as io from 'socket.io-client';
import { GLOBAL } from '../../../../service/global';
@Component({
  selector: 'ngx-usuario-monitoreo-bateria',
  styleUrls: ['./monitoreo_bateria.component.scss'],
  templateUrl: './monitoreo_bateria.component.html',
   animations: [fundido]
})
export class MonitoreoBateriaComponent {
  public ValorB=55;
  public urlSocket:string;
  socket;
	
constructor(){	
	localStorage.setItem('route','Mbateria');
    this.urlSocket=GLOBAL.urlSocket;
    this.socket = io(this.urlSocket);
}

ngAfterViewInit() {
    this.startRealtime()

  }
  async startRealtime(){
    
    this.socket.on('arduino', payload => {
      
      this.ValorB=parseFloat(payload.bateria)
    })
    
    
  }
	
}