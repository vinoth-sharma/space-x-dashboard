import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

// var document: any;

@Component({
  selector: 'app-filter-wrapper',
  templateUrl: './filter-wrapper.component.html',
  styleUrls: ['./filter-wrapper.component.scss'],
  host: {
    '(document:keydown)': 'handleKeyboardEvents($event)',
  },
})
export class FilterWrapperComponent implements OnInit {
  @Output() filterSelectedEmittor = new EventEmitter();
  public yearsList: Array<number> = [];

  public filterselectedObj = {
    launch_year: null,
    launch_success: null,
    land_success: null,
  };

  handleKeyboardEvents(event: KeyboardEvent) {
    if (event.key === 'Tab' && document.activeElement.nodeName !== 'BUTTON') {
      event.preventDefault();
      event.stopPropagation();
      document.getElementsByTagName('button')[0].focus();
    }
  }

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

  filterSelected(event, value: any, type: string) {
    if (this.filterselectedObj[type] === value) {
      // document.activeElement.blur();
      event.view.document.activeElement.blur();
    }
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
    this.updateDataWithFilters();
  }

  updateDataWithFilters() {
    let url = '';
    for (const key in this.filterselectedObj) {
      if (Object.prototype.hasOwnProperty.call(this.filterselectedObj, key)) {
        const element = this.filterselectedObj[key];
        if (element !== null) url += '&' + key + '=' + element;
      }
    }
    this.filterSelectedEmittor.emit(url);
  }
}
