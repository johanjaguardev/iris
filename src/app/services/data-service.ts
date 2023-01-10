import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap, take } from 'rxjs';
import { IItem } from '../types/IItem';
import { IFilter } from '../types/IFilter';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  itemsSubject = new BehaviorSubject<IItem[]>([]);
  filter = new BehaviorSubject<string>('All');

  get items$(): Observable<IItem[]> {
    return this.itemsSubject.asObservable();
  }

  addItem(item: IItem): void {
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
    debugger;
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

  updateFilter(filter: IFilter): void {
    this.filter.next(filter);
  }
  getFilteredValue$(): Observable<string> {
    return this.filter.pipe(take(1));
  }

  getFilteredItems$(): Observable<IItem[]> {
    return this.filter.asObservable().pipe(
      switchMap((filterValue: string) => {
        switch (filterValue) {
          case 'All':
            return this.items$;
          case 'Checked':
            return this.items$.pipe(
              map((items: any) =>
                items.filter((item: { checked: any }) => item.checked)
              )
            );
          case 'Unchecked':
            return this.items$.pipe(
              map((items) => items.filter((item) => !item.checked))
            );
          default:
            return of([]);
        }
      })
    );
  }
}
