import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-program-wrapper',
  templateUrl: './program-wrapper.component.html',
  styleUrls: ['./program-wrapper.component.scss'],
})
export class ProgramWrapperComponent implements OnInit {
  @Input() filterSelected: string = '';
  @Output() isLoadingEmittor = new EventEmitter();

  isLoading: boolean = false;

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
    this.isLoading = true;
    this.isLoadingEmittor.emit(true);
    this.globalService
      .getAllSpacePrograms(params)
      .subscribe((response: Array<any>) => {
        this.programData = response;
        this.isLoading = false;
        this.isLoadingEmittor.emit(false);
      });
  }
}
