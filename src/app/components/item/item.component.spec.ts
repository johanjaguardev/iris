import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemComponent],
      imports: [MatCheckboxModule, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist item form control', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="item"]')
    ).toBeTruthy();
  });

  it('should exist element with item class', () => {
    expect(fixture.nativeElement.querySelector('.item')).toBeTruthy();
  });

  it('should exist item__icon form control', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="item__icon"]')
    ).toBeTruthy();
  });

  it('should exist element with item__icon class', () => {
    expect(fixture.nativeElement.querySelector('.item__icon')).toBeTruthy();
  });
});
