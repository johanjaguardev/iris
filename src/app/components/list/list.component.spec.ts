import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ItemComponent } from './../item/item.component';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent, ItemComponent],
      imports: [MatCheckboxModule, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should exist list form control', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="list"]')
    ).toBeTruthy();
  });

  it('should exist element with list class', () => {
    expect(fixture.nativeElement.querySelector('.list')).toBeTruthy();
  });
});
