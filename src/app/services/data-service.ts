import { Injectable } from '@angular/core';
import { IItem } from '../types/IItem';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  items: IItem[] = [];

  constructor() {}

  addItem(item: IItem) {
    this.items.push(item);
  }
  removeItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }
  getItem(id: number): IItem {
    return this.items.filter((item) => item.id === id)[0];
  }
}
