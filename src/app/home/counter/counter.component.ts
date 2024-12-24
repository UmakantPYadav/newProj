import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  currentVal = signal(0);
  increment() {
    this.currentVal.update((val) => val + 1);
  }
  decrement() {
    this.currentVal.update((val)=>val-1);
  }
  reset() {
    this.currentVal.set(0);
  }
}
