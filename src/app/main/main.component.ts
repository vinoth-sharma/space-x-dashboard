import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public url: string = '';
  public isLoading: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  updateFilters(value) {
    this.url = value;
  }

  isLoadingValue(value) {
    this.isLoading = value;
    this.cdRef.detectChanges();
  }
}
