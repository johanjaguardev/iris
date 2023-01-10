import { waitForAsync, TestBed } from '@angular/core/testing';
import { IItem } from '../types/IItem';

import { DataService } from './data-service';

describe('DataService', () => {
  let service: DataService;
  let item1: IItem;
  let item2: IItem;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
    }).compileComponents();
    service = TestBed.inject(DataService);
  }));

  beforeEach(() => {
    item1 = { id: '1', description: 'Item 1', checked: false };
    item2 = { id: '2', description: 'Item 2', checked: true };
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add an item to the list', () => {
    // Verify that the list is initially empty
    expect(service.itemsSubject.value.length).toBe(0);

    // Add an item to the list
    const item = { id: '1', description: 'Item 1', checked: false };
    service.addItem(item);

    // Verify that the item was added to the list
    expect(service.itemsSubject.value.length).toBe(1);
    expect(service.itemsSubject.value[0]).toEqual(item);
  });

  it('should remove an item from the list', () => {
    // Add some initial items to the list
    service.addItem({ id: '1', description: 'Item 1', checked: false });
    service.addItem({ id: '2', description: 'Item 2', checked: false });
    service.addItem({ id: '3', description: 'Item 3', checked: false });

    // Verify that the list has the expected number of items
    expect(service.itemsSubject.value.length).toBe(3);

    // Remove an item from the list
    service.removeItem('2');

    // Verify that the item was removed and the list has the expected number of items
    expect(service.itemsSubject.value.length).toBe(2);
    expect(
      service.itemsSubject.value.find((item) => item.id === '2')
    ).toBeUndefined();
  });
  it('should return an item by its ID', () => {
    service.addItem(item1);
    service.addItem(item2);
    const retrievedItem = service.getItem(item1.id);
    expect(retrievedItem).toEqual(item1);
  });

  it('should update an item in the list', () => {
    service.addItem(item1);
    const modifiedItem = { ...item1, description: 'Modified Item 1' };
    service.updateItem(modifiedItem);
    expect(service.getItem(item1.id)).toEqual(modifiedItem);
  });
});
