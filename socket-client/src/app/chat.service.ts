import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  ack = this.socket.fromEvent<string>('ackMessage');

  constructor(private socket: Socket) { }

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }
  
}
