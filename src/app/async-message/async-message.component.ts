import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-async-message',
  templateUrl: './async-message.component.html',
  styleUrls: ['./async-message.component.css']
})
export class AsyncMessageComponent implements OnInit {

  message$ : Observable<string>

  private messages = [ 'You are my hero', 'You are the super hero :)', 'Will you be my hero?' ]

  constructor() { 
    this.resend()
  }

  ngOnInit(): void {
  }

  resend() {
    this.message$ = interval(1000).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    )
  }
}
