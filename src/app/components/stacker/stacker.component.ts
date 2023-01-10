import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service';
import { IItem } from 'src/app/types/IItem';

@Component({
  selector: 'app-stacker',
  templateUrl: './stacker.component.html',
  styleUrls: ['./stacker.component.scss'],
})
export class StackerComponent {
  value = 'Text the new item';
  items: IItem[];
  constructor(private dataService: DataService) {
    this.items = this.dataService.items;
  }

  onClickAdd = () => {
    this.addItem(this.value);
  };

  addItem = (desc: string) => {
    this.dataService.addItem({
      description: desc,
      checked: false,
      id: Math.random().toString(36).substring(2),
    });
  };
}
