import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public url: string = '';
  public isLoading: boolean = false;
  public isArrowEnable: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  onElementScroll(event) {
    if (event.target.scrollTop > 200) {
      this.isArrowEnable = true;
    } else {
      this.isArrowEnable = false;
    }
  }

  ngOnInit(): void {}

  updateFilters(value) {
    this.url = value;
  }

  isLoadingValue(value) {
    this.isLoading = value;
    this.cdRef.detectChanges();
  }

  swipeUp() {
    document.getElementsByTagName('main')[0].scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
