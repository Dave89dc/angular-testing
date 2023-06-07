import { Component } from '@angular/core';
import { ElaborationService } from './service/elaboration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  string: string = '2 pippo 3 4 A 10';
  numbers: number[] = [2, 5, -70, 10, -18, 3, 50, -11, 13, 23]

  constructor(private elaboration: ElaborationService){
    console.log(this.elaboration.fromStringToArrayOfNumbers(this.string));
    console.log(this.elaboration.filterAnomalies(this.numbers, 10, -10));
  }
}
