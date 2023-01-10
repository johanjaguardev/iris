import { TestBed } from '@angular/core/testing';
import { IItem } from '../types/IItem';

import { DataService } from './data-service';

describe('DataServiceService', () => {
  let service: DataService;
  let mockData: IItem[] = [{ description: 'test item', checked: false, id: 0 }];

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DataService] });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have an empty items array', () => {
    expect(service.items).toEqual([]);
  });
  it('should add an item to the items array', () => {
    service.addItem(mockData[0]);
    expect(service.items).toEqual([
      { description: 'test item', checked: false, id: 0 },
    ]);
  });
  it('should remove an item from the items array', () => {
    service.items = mockData;
    service.removeItem(0);
    expect(service.items).toEqual([]);
  });
  it('should return the correct item from the items array', () => {
    service.items = mockData;
    const item = service.getItem(0);
    expect(item).toEqual({ description: 'test item', checked: false, id: 0 });
  });
  it('should update the item from the items array', () => {
    service.items = mockData;
    const item = service.updateItem({
      description: 'test item updated',
      checked: true,
      id: 0,
    });
    expect(service.items).toEqual([
      {
        description: 'test item updated',
        checked: true,
        id: 0,
      },
    ]);
  });
});
