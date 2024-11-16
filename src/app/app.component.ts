import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText = lorem.sentence();
  userInput = '';
  success = false;

  onChange(event: Event) {
    this.userInput = (event.target as HTMLInputElement).value;
    if (this.randomText === this.userInput) {
      this.success = true;
    }
    console.log((event.target as HTMLInputElement).value);
  }

  compare (randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
