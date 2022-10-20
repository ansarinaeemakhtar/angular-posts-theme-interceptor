import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() counterValue = new EventEmitter();
  counter = 0;

  incrementValue () {
    this.counter = this.counter+1;
    this.counterValue.emit(this.counter);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
