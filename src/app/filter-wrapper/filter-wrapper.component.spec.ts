import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWrapperComponent } from './filter-wrapper.component';

describe('FilterWrapperComponent', () => {
  let component: FilterWrapperComponent;
  let fixture: ComponentFixture<FilterWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
