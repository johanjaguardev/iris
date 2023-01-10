import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ItemComponent } from './item.component';
import { FormsModule } from '@angular/forms';
import { IItem } from 'src/app/types/IItem';
import { DataService } from 'src/app/services/data-service';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let service: DataService;
  let fixture: ComponentFixture<ItemComponent>;
  let checkboxElement: HTMLElement;
  let iconElement: HTMLElement;
  const item: IItem = {
    checked: true,
    description: '',
    id: '0',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemComponent],
      imports: [MatCheckboxModule, MatIconModule, FormsModule],
      providers: [DataService],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DataService);
    checkboxElement =
      fixture.debugElement.nativeElement.querySelector('.item__checkbox');
    iconElement = fixture.nativeElement.querySelector('.item__icon');
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

  it('should have a mat-checkbox element', () => {
    expect(checkboxElement).toBeTruthy();
  });

  it('should have a mat-icon element', () => {
    expect(iconElement).toBeTruthy();
  });

  it('should display the item description', () => {
    fixture.detectChanges();
    expect(checkboxElement.textContent).toContain(component.item.description);
  });

  xit('should bind the item checked property to the ngModel directive', () => {
    fixture.detectChanges();
    expect(checkboxElement.getAttribute('ng-reflect-model')).toBe('true');
  });

  it('should set the fontIcon attribute of the mat-icon element to "close"', () => {
    expect(iconElement.getAttribute('ng-reflect-font-icon')).toBe('close');
  });

  xit('should check the mat-checkbox when item.checked is true', () => {
    component.item = {
      checked: true,
      description: '',
      id: '0',
    };
    fixture.detectChanges();

    expect(checkboxElement.classList).toContain('mat-checkbox-checked');
  });

  it('should remove an item with the specified id', () => {
    const item1 = { id: '1', description: 'Item 1', checked: false };
    const item2 = { id: '2', description: 'Item 2', checked: true };
    service.items = [item1, item2];
    service.removeItem('1');
    expect(service.items).toEqual([item2]);
  });

  it('should call the removeItem method of the DataService on button click', () => {
    const item1 = { id: '1', description: 'Item 1', checked: false };
    const item2 = { id: '2', description: 'Item 2', checked: true };
    service.items = [item1, item2];
    spyOn(service, 'removeItem');
    component.onRemoveItem('1');
    expect(service.removeItem).toHaveBeenCalledWith('1');
  });
});
