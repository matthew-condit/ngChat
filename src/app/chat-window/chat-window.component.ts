import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  messages: String[];
  newMessage: String;

  constructor() { }

  onSend() {
    console.log(this.newMessage);
    this.messages.unshift(this.newMessage);
    this.newMessage ='';
  };

  ngOnInit() {
    this.messages = [
      'Hello World newest',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World',
      'Hello World oldest'
    ];
  }

}
