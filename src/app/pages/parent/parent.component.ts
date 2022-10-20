import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  showCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

  displayCounter (count: number) {
    this.showCount = count;
  }

}
