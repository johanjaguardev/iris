import { Component, Input } from '@angular/core';
import { IItem } from 'src/app/types/IItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: IItem;
  constructor() {
    this.item = {
      checked: false,
      description: '',
      id: '0',
    };
  }
}
