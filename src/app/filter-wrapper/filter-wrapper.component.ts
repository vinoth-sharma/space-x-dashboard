import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-wrapper',
  templateUrl: './filter-wrapper.component.html',
  styleUrls: ['./filter-wrapper.component.scss'],
})
export class FilterWrapperComponent implements OnInit {
  @Output() filterSelectedEmittor = new EventEmitter();
  public yearsList: Array<number> = [];

  public filterselectedObj = {
    launch_year: null,
    launch_success: null,
    land_success: null,
  };

  constructor() {}

  ngOnInit(): void {
    this.generateLaunchYears();
  }

  generateLaunchYears() {
    let currentYear = new Date().getFullYear();
    this.yearsList = [];
    for (let index = 0; index < 15; index++) {
      this.yearsList.push(currentYear--);
    }
    this.yearsList.sort();
  }

  filterSelected(value: any, type: string) {
    switch (type) {
      case 'launch_year':
        this.filterselectedObj[type] =
          this.filterselectedObj[type] === value ? null : value;
        break;
      case 'launch_success':
        this.filterselectedObj[type] =
          this.filterselectedObj[type] === value ? null : value;
        break;
      case 'land_success':
        this.filterselectedObj[type] =
          this.filterselectedObj[type] === value ? null : value;
        break;

      default:
        break;
    }

    console.log(this.filterselectedObj);
    this.updateDataWithFilters();
  }

  updateDataWithFilters() {
    let url = '';
    for (const key in this.filterselectedObj) {
      if (Object.prototype.hasOwnProperty.call(this.filterselectedObj, key)) {
        const element = this.filterselectedObj[key];
        console.log(element);
        if (element !== null) url += '&' + key + '=' + element;
      }
    }
    this.filterSelectedEmittor.emit(url);
    console.log(url);
  }
}
