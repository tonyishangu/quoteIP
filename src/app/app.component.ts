import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    new Quote(1, 'As am thinketh so is he', 'Bob Proctor', 'Tony'),
    new Quote(2, 'Life is about making impact', 'Kevin Kruse', 'Tony'),
    new Quote(3, 'The way to get started is to quit talking and begin doing', 'Walt Disney', 'Tony'),
    new Quote(4, 'Life is what happens when you are busy making other plans', 'John Lennon', 'Tony')
  ];
}
