import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { FilterComponent } from './filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [
        MatSelectModule,
        MatFormFieldModule,
        MatOptionModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
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
});
