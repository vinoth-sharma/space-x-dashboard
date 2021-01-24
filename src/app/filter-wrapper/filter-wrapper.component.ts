import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-wrapper',
  templateUrl: './filter-wrapper.component.html',
  styleUrls: ['./filter-wrapper.component.scss'],
})
export class FilterWrapperComponent implements OnInit {
  public yearsList: Array<number> = [];

  constructor() {}

  ngOnInit(): void {
    this.generateLaunchYears();
    console.log(this.yearsList);
  }

  generateLaunchYears() {
    let currentYear = new Date().getFullYear();
    this.yearsList = [];
    for (let index = 0; index < 15; index++) {
      this.yearsList.push(currentYear--);
    }
    this.yearsList.sort();
  }
}
