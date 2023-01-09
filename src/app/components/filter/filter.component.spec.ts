import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { FilterComponent } from './filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
});
