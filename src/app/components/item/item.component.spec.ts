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

  it('should remove an item from the list', () => {
    // Add some initial items to the list
    service.addItem({ id: '1', description: 'Item 1', checked: false });
    service.addItem({ id: '2', description: 'Item 2', checked: false });
    service.addItem({ id: '3', description: 'Item 3', checked: false });

    // Verify that the list has the expected number of items
    expect(service.itemsSubject.value.length).toBe(3);

    // Call the onRemoveItem method with the ID of an item
    component.onRemoveItem('2');

    // Verify that the item was removed and the list has the expected number of items
    expect(service.itemsSubject.value.length).toBe(2);
    expect(
      service.itemsSubject.value.find((item) => item.id === '2')
    ).toBeUndefined();
  });

  describe('onRemoveItem', () => {
    it('should call removeItem on dataService', () => {
      const id = '123';
      spyOn(service, 'removeItem');
      component.onRemoveItem(id);
      expect(service.removeItem).toHaveBeenCalledWith(id);
    });
  });
  describe('onEditItem', () => {
    it('should set isTextHidden to false', () => {
      const id = '123';
      component.onEditItem(id);
      expect(component.isTextHidden).toBeFalsy();
    });
  });
  describe('onCheckItem', () => {
    it('should call updateItem on dataService', () => {
      const id = '123';
      spyOn(service, 'updateItem');
      component.onCheckItem(id);
      expect(service.updateItem).toHaveBeenCalled();
    });
    it('should set isTextHidden to true', () => {
      const id = '123';
      component.onCheckItem(id);
      expect(component.isTextHidden).toBeTruthy();
    });
  });
  describe('onClearItem', () => {
    it('should set isTextHidden to true', () => {
      component.onClearItem();
      expect(component.isTextHidden).toBeTruthy();
    });
  });
});
