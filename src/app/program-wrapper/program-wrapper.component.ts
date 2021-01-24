import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-program-wrapper',
  templateUrl: './program-wrapper.component.html',
  styleUrls: ['./program-wrapper.component.scss'],
})
export class ProgramWrapperComponent implements OnInit {
  @Input() filterSelected: string = '';

  programData = [];
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.getAllProgramDetails('');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.filterSelected.firstChange) {
      this.getAllProgramDetails(changes.filterSelected.currentValue);
    }
  }

  getAllProgramDetails(params) {
    this.globalService
      .getAllSpacePrograms(params)
      .subscribe((response: Array<any>) => {
        console.log(response);
        this.programData = response;
      });
  }
}
