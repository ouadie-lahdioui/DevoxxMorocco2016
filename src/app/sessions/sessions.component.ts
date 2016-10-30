import { Component, OnInit } from '@angular/core';
import { Session } from '../models/session';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  sessions: Session[] = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessions = this.sessionService.getSessions();
  }

}
