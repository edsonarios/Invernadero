import { Component, OnInit} from '@angular/core';

import { fundido } from '../../../animation';
import * as io from 'socket.io-client';
import { GLOBAL } from '../../../service/global';
@Component({
  selector: 'ngx-bateria',
  templateUrl: './bateria.component.html',
  animations: [fundido]
  
})
export class BateriaComponent implements OnInit{
  public ValorB=55;
  public urlSocket:string;
  socket;

  constructor(){
    localStorage.setItem('route','Mbateria');
    this.urlSocket=GLOBAL.urlSocket;
    this.socket = io(this.urlSocket);
  }
  ngOnInit(){
   
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