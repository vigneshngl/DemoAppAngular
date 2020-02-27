import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-peek-a-boo-parent',
  template: `
    <div class="parent">
      <h2>Peek-a-boo</h2>
      <button (click)="toggleChild()">{{hasChild?'Destroy':'Create'}}PeekABooComponent</button>
      <button (click)="updateHero()" [hidden]="!hasChild">Update hero</button>
      <app-peek-a-boo *ngIf="hasChild" [name]="heroName"></app-peek-a-boo>
    </div>
    <h4> -- Lifecyclehook logs </h4>
    <div *ngFor="let msg of hooklog">{{msg}}</div>
  `,
  styles: ['.parent{background:moccasin}']
})
export class PeekABooParentComponent implements OnInit {

  hasChild = false
  hooklog : string[]
  heroName = "Vignesh"

  constructor(public logger : LoggerService) { 
    this.logger = logger
    this.hooklog = logger.logs
  }

  ngOnInit(): void {
  }

  toggleChild() {
    this.hasChild = !this.hasChild
    if (this.hasChild) {
      this.heroName = "Viki"
      this.logger.clear()
    }
    this.hooklog = this.logger.logs
  }

  updateHero() {
    this.heroName += "!"
  }
}
