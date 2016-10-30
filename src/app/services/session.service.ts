import { Injectable } from '@angular/core';
import { Session } from '../models/session';

@Injectable()
export class SessionService {

  sessions: Session[] = [];

  constructor() {
    this.sessions.push(new Session(1, 'Angular 2 : From Zero To Hero', Date.now()));
    this.sessions.push(new Session(2, 'Un tour d\'horizon de la Blockchain', Date.now()));
    this.sessions.push(new Session(3, 'L\'obsession de la mesure dans la culture agile', Date.now()));
  }

  getSessions(): Session[] {
      return this.sessions;
  }

}
