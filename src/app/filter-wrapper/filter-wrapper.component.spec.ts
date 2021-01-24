import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWrapperComponent } from './filter-wrapper.component';

describe('FilterWrapperComponent', () => {
  let component: FilterWrapperComponent;
  let fixture: ComponentFixture<FilterWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterWrapperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component, 'ngOnInit');
    expect(component).toBeTruthy();
  });

  it('Years list generate function', () => {
    component.generateLaunchYears();
    expect(component.yearsList).toEqual(yearsList);
  });

  it('Filter Selection function', () => {
    component.filterSelected(2016, 'launch_year');
    component.filterSelected(true, 'launch_success');
    component.filterSelected(true, 'land_success');
    expect(component.filterselectedObj.launch_year).toEqual(2016);
    expect(component.filterselectedObj.launch_success).toEqual(true);
    expect(component.filterselectedObj.land_success).toEqual(true);
  });

  it('function to generate url based on filters', () => {
    spyOn(component.filterSelectedEmittor, 'emit').and.callThrough();
    component.filterselectedObj.launch_year = 2017;
    component.filterselectedObj.launch_success = null;
    component.filterselectedObj.land_success = null;
    component.updateDataWithFilters();
    fixture.detectChanges();

    let arg: any = (component.filterSelectedEmittor
      .emit as any).calls.mostRecent().args[0];
    expect(arg).toEqual('&launch_year=2017');
  });
});

const yearsList = [
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
];
