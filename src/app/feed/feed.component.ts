import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.models';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
