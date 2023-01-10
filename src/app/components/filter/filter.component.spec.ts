import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { FilterComponent } from './filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from 'src/app/services/data-service';
import { By } from '@angular/platform-browser';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let dataService: DataService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [
        MatSelectModule,
        MatFormFieldModule,
        MatOptionModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: DataService,
          useValue: {
            updateFilter: jasmine.createSpy('updateFilter'),
          },
        },
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should exist filter form control', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="filter"]')
    ).toBeTruthy();
  });

  it('should exist element with filter class', () => {
    expect(fixture.nativeElement.querySelector('.filter')).toBeTruthy();
  });

  it('should call onStateChange when dropdown change', () => {
    spyOn(component, 'onStateChange');
    const select = fixture.debugElement.query(By.css('mat-select'));
    const selectNativeElement = select.nativeElement;
    selectNativeElement.dispatchEvent(new Event('selectionChange'));
    fixture.detectChanges();
    expect(component.onStateChange).toHaveBeenCalled();
  });

  it('should call dataService.updateFilter when onStateChange', () => {
    component.selectedState = 'Checked';
    component.onStateChange();
    expect(dataService.updateFilter).toHaveBeenCalledWith('Checked');
  });

  it('should update selectedState when onStateChange', () => {
    component.selectedState = 'Unchecked';
    component.onStateChange();
    expect(component.selectedState).toEqual('Unchecked');
  });
});
