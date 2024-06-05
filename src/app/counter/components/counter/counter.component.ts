import { Component} from '@angular/core';

@Component({
  selector: 'app-counter ',
  template: `
<h3>Counter: {{counter}}</h3>

<button (click)="incresby(1)">+1</button>
<button (click)="reset()">reset</button>
<button (click)="decresby(1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  incresby(value:number):void{
    this.counter += value;

  }
  decresby(value:number):void{
    this.counter -= value;

  }
   reset(): void{
    this.counter = 10;

   }
}

