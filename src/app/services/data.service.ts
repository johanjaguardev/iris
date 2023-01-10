import { Injectable } from '@angular/core';
import { IItem } from '../types/IItem';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  items: IItem[] = [
    { status: true, description: 'Item 2' },
    { status: false, description: 'Item 3' },
    { status: true, description: 'Item 6' },
    { status: false, description: 'Item 10' },
    { status: true, description: 'Item 1' },
    { status: false, description: 'Item 7' },
    { status: true, description: 'Item 5' },
    { status: false, description: 'Item 8' },
    { status: true, description: 'Item 9' },
    { status: false, description: 'Item 4' },
  ];

  constructor() {}
}
