import { Component,  } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter</h1>
    <h3>Counter: {{ counter }}</h3>
    <button (click)="incrementBy(2)">+1</button>
    <button (click)="decrementBy(2)">-1</button>
    <button (click)="reset()">reset</button>
  `
})
export class CounterComponent {

  public counter: number = 10;

  constructor() {}

  public incrementBy(amount: number): void {
    this.counter += amount;
  }

  public decrementBy(amount: number): void {
    this.counter > 0 ? this.counter -= amount : this.counter = 0;
  }

  public reset(): void {
    this.counter = 10;
  }

}