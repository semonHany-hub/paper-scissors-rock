import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  choices: string[] = ['Rock', 'Scissors', 'Paper'];
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  select(choice: string) {
    this.playerChoice = choice;
    this.computerChoice = this.choices[Math.floor(Math.random() * 3)];
    this.checkResult(this.playerChoice, this.computerChoice);
  }

  checkResult(player: string, computer: string) {
    if (player === computer) this.result = "It's tie!";
    else if (
      (player == 'Rock' && computer == 'Scissors') ||
      (player == 'Scissors' && computer == 'Paper') ||
      (player == 'Paper' && computer == 'Rock')
    )
      this.result = 'congratulations, you won!';
    else this.result = 'sorry, you loss!';
  }
}
