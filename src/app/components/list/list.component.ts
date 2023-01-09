import { Component } from '@angular/core';
import { Item } from './../../types/Item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  items: Item[] = [
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
}
