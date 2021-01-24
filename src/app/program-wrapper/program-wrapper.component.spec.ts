import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramWrapperComponent } from './program-wrapper.component';

describe('ProgramWrapperComponent', () => {
  let component: ProgramWrapperComponent;
  let fixture: ComponentFixture<ProgramWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
