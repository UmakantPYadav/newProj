import { Component } from '@angular/core';
import { GreetingComponent } from '../home/greeting/greeting.component';
import { CounterComponent } from '../home/counter/counter.component';
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  keyupPlaceholder(event: KeyboardEvent) {
    console.log(`User press this key brother ${event.key}`);
  }
  homeMessage = 'hi this is comming from home';
}
