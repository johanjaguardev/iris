import { Injectable } from '@angular/core';
import { IItem } from '../types/IItem';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  items: IItem[] = [];

  constructor() {}

  addItem(item: IItem): void {
    this.items.push(item);
  }
  removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
  getItem(id: number): IItem {
    return this.items.filter((item) => item.id === id)[0];
  }
  updateItem(modifyedItem: IItem): void {
    this.items = this.items.map((item) => {
      if (item.id === modifyedItem.id) {
        return {
          ...item,
          description: modifyedItem.description,
          checked: modifyedItem.checked,
        };
      }
      return item;
    });
  }
}
