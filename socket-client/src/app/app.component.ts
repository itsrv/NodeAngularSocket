import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'socketexample';

  constructor(private chat:ChatService) {

  }

  ngOnInit() {
    this.chat.ack.subscribe(ack => {
      alert(ack);
    });
  }

  sendMessage(){
    this.chat.sendMessage("Hello");
  }
}
