import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IItem } from '../types/IItem';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private itemsSubject = new BehaviorSubject<IItem[]>([]);

  constructor() {}
  get items$(): Observable<IItem[]> {
    return this.itemsSubject.asObservable();
  }

  addItem(item: IItem): void {
    debugger;
    this.itemsSubject.next([...this.itemsSubject.value, item]);
  }
  removeItem(id: string) {
    this.itemsSubject.next(this.itemsSubject.value.filter((x) => x.id !== id));
  }
  getItem(id: string): IItem {
    const item = this.itemsSubject.value.find((item) => item.id === id);
    return item || { id: '', description: '', checked: false };
  }
  updateItem(modifyedItem: IItem): void {
    this.itemsSubject.next(
      this.itemsSubject.value.map((item) => {
        if (item.id === modifyedItem.id) {
          return {
            ...item,
            description: modifyedItem.description,
            checked: modifyedItem.checked,
          };
        }
        return item;
      })
    );
  }

  getAllItems$(): Observable<IItem[]> {
    return of(this.itemsSubject.value);
  }
}
