import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { from } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote( 1, 'As am thinketh so is he', 'Bob Proctor', 'Tony' ),
    new Quote( 2, 'Life is about making impact', 'Kevin Kruse', 'Tony' ),
    new Quote( 3, 'The way to get started is to quit talking and begin doing', 'Walt Disney', 'Tony' ),
    new Quote( 4, 'Life is what happens when you are busy making other plans', 'John Lennon', 'Tony' ),
    new Quote(5, 'If life were predictable it would cease to be life, and be without flavor.', 'leanor Roosevelt', 'Tony'),
    new Quote(6, 'If you look at what you have in life, you will always have more.If you look at what you do not have in life, you will never have enough.', 'Oprah Winfrey', 'Tony'),
    new Quote(7, 'If you set your goals ridiculously high and it is a failure, you will fail above everyone else success.', 'James Cameron', 'Tony')
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
