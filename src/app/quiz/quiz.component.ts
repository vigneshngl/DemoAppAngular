import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

class Quiz {
  question : string
  answer : string
  userAnswer : string
  hide : boolean

  constructor(question : string, answer : string) {
    this.question = question
    this.answer = answer
    this.hide = false
  }

  validateAnswer() {
    if (this.userAnswer == this.answer) {
      alert("Answered correctly")
    } else {
      alert("Try again")
    }     
  }

  toggle() {
    this.hide = !this.hide
  }
}

@Component({
  selector: 'app-quiz',
  template: `
    <div class="card card-block">
      <h4 class="card-title">
        <ng-content select=".question"></ng-content>
      </h4>
      <p class="card-text" [hidden]="data.hide">
        <input type="text" [(ngModel)]="data.userAnswer" />
      </p>
      <a class="btn btn-secondary" (click)="data.validateAnswer()">
        Answer the quiz
      </a>
    </div>
  `,
  styles: []
})
export class QuizComponent implements OnInit, OnChanges, OnDestroy, DoCheck,
 AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {
  
  @Input("quiz")
  data : Quiz

  constructor() {
    console.log(`constructor - data from Quiz list component is ${this.data}`)
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  ngOnInit(): void {
    console.log(`ngOnInit - data from Quiz list ${this.data}`)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges - data from Quiz list ${this.data}`)

    for (let key in changes) {
      console.log(`${key} attribute changed.
      current : ${changes[key].currentValue},
      previous : ${changes[key].previousValue}`)
    }
  }

}

@Component({
  selector: 'app-quiz-list',
  template: `
  <div>
    <app-quiz *ngFor="let q of quizes" [quiz]="q">
      <span class="question">{{q.question}}</span>
      <h1 class="answer">{{q.answer}}</h1>
    </app-quiz>
    <button (click)="addQuiz()" class="btn btn-success"> Show Quiz </button>
    &nbsp;
    <button (click)="clearQuiz()" class="btn btn-info"> Clear Quiz </button>
  </div>
  `,
  styles: ['div:{backgroud-color:aqua;border:1px solid gray;}']
})
export class QuizListComponent {

  quizes : Quiz[] = []

  constructor() { }
  
  addQuiz() {
    this.quizes.unshift(
      new Quiz("What is 100 + 200", "300")
    )
  }

  clearQuiz() {
    this.quizes = []
  }
}
