import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-program-wrapper',
  templateUrl: './program-wrapper.component.html',
  styleUrls: ['./program-wrapper.component.scss'],
})
export class ProgramWrapperComponent implements OnInit {
  noPrograms = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  programData = [];
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.getAllProgramDetails();
  }

  getAllProgramDetails() {
    this.globalService
      .getAllSpacePrograms()
      .subscribe((response: Array<any>) => {
        console.log(response);
        this.programData = response;
      });
  }
}
