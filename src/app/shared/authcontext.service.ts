import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthcontextService {

  constructor() { }
  username:string = null;

  userChanged = new EventEmitter<string>();

  setUser(username:string):void{
    this.username = username;
    this.userChanged.emit(username);
  }

}
