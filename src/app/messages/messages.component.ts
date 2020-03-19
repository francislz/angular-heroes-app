import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  open = false;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.open = !this.open;
  }
}
