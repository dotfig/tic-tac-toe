import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tic-tac-toe';

  empty: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  user: number[] = [];
  computer: number[] = [];
  winner: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  ngOnInit() {

  }

  boxClicked(box: number) {
    if (this.empty.includes(box)) {

      this.empty = this.empty.filter(obj => obj !== box);
      this.user.push(box);
      this.computer.push(this.empty[1]);
      this.empty = this.empty.filter(obj => obj !== this.empty[1]);

      if (this.user.length >= 3 || this.computer.length >= 3) {
        for (let i = 0; i < this.winner.length; i++) {
          if (this.user.includes(this.winner[i][0]) && this.user.includes(this.winner[i][1]) && this.user.includes(this.winner[i][2])) {
            console.log('User Won');
            return;
          }
          if (this.computer.includes(this.winner[i][0]) && this.computer.includes(this.winner[i][1]) && this.computer.includes(this.winner[i][2])) {
            console.log('Computer Won');
            return;
          }
        }
      }

      console.log(this.user);
      console.log(this.computer);
      console.log(this.empty);
    }
  }
}
