import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logs : string[] = []
  previousMsg : string
  previousMsgCount : number = 1

  constructor() { }

  log(msg: string) {
    if (msg === this.previousMsg) {
      this.logs[this.logs.length - 1] = msg + `(${this.previousMsgCount += 1})x`
    } else {
      this.previousMsg = msg
      this.logs.push(msg)
    }
  }

  clear() { 
    this.logs = []; 
  }
}
