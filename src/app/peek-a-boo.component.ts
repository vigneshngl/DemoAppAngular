import { Component, OnInit, Input } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy } from '@angular/core';
import { LoggerService } from './logger.service';
import { Observable } from 'rxjs';

let nextId = 1

export class PeekABoo implements OnInit {

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log("On Init")
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}

@Component({
  selector: 'app-peek-a-boo',
  template: '<p>Hello hero {{name}}</p>',
  styles: ['p{backgroud:LightYellow;padding:8px}']
})
export class PeekABooComponent extends PeekABoo implements OnInit, OnChanges, DoCheck, AfterContentChecked,
AfterContentInit, AfterViewInit, OnDestroy {
  
  verb : string = "Initialized"  

  @Input()
  name : string

  constructor(logger: LoggerService) {
    super(logger)

    let is = this.name ? "is" : "is not"
    this.logIt(`name ${is} known at construction`)

    // const promise = new Promise({
    //   data(1);
    //   data(2);
    //   data(3);
    // }).then(element => {console.log('Promise ' + element)})

    // const observ = new Observable({
    //   data(1);
    //   data(2);
    //   data(3);
    // }).subscribe(element => {console.log('Observable ' + element)})
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    let changesMsgs: string[] = []
    for (let propName in changes) {
      if (propName == 'name') {
        let name = changes['name'].currentValue
        changesMsgs.push(`name ${this.verb} to "${name}`)
      } else {
        changesMsgs.push(propName + ' ' + this.verb)
      }
    }
    this.logIt(`onChanges : ${changesMsgs.join('; ')}`)
    this.verb = "changed"
  }

  ngAfterViewInit(): void {
    this.logIt("After view init")
  }

  ngAfterContentInit(): void {
    this.logIt("After content init")
  }

  ngAfterContentChecked(): void {
    this.logIt("After content checked")
  }

  ngDoCheck(): void {
    this.logIt("Do check")
  }
  
  ngOnDestroy(): void {
    this.logIt("On destroy")
  }
  
}
