import { Component, OnInit, OnDestroy } from '@angular/core';

class MyDate {
  public total: number;
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;
}

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {

  pollsClose = '2024-05-02T21:00:00.000Z';
  deadline = Date.parse(new Date(this.pollsClose).toString());

  days = 1;
  hours = 1;
  minutes = 1;
  seconds = 1;

  timeinterval: any;

  constructor() { }

  ngOnInit(): void {

    // https://stackoverflow.com/questions/35258003/how-to-access-constructor-properties-from-a-setinterval-on-angular2
    const passThis = this;
    this.timeinterval = setInterval(this.updateClock, 1000, passThis);
  }

  updateClock(that) {

    const timeNow = Date.parse(new Date().toString());
    const total = that.deadline - timeNow;

    if (total < 0) {
      clearInterval(that.timeinterval);
    } else {
      that.days = Math.floor(total / (1000 * 60 * 60 * 24));
      that.hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      that.minutes = Math.floor((total / 1000 / 60) % 60);
      that.seconds = Math.floor((total / 1000) % 60);
    }
  }

  ngOnDestroy() {
    clearInterval(this.timeinterval);
  }

}
