import { Component, OnInit } from '@angular/core';
import { Session } from '../models/session';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sessions: Session[] = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessions = this.sessionService.getSessions().slice(0, 2);
  }

}
