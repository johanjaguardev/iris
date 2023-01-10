import { async, TestBed } from '@angular/core/testing';
import { IItem } from '../types/IItem';

import { DataService } from './data-service';

describe('DataServiceService', () => {
  let service: DataService;
  let item1: IItem;
  let item2: IItem;

  beforeEach(async(() => {
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
    service.addItem(item1);
    expect(service.getAllItems$()).toContain(item1);
  });
  it('should remove an item from the list', () => {
    service.addItem(item1);
    service.addItem(item2);
    service.removeItem(item1.id);
    expect(service.getAllItems$()).not.toContain(item1);
    expect(service.getAllItems$()).toContain(item2);
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
