import { Component, Input } from '@angular/core';
import { IItem } from 'src/app/types/IItem';
import { DataService } from 'src/app/services/data-service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: IItem;
  checkboxValue: boolean;
  constructor(private dataService: DataService) {
    this.item = {
      checked: false,
      description: '',
      id: '0',
    };
    this.checkboxValue = this.item.checked;
  }
  onCheckboxChange() {
    this.dataService.updateItem({ ...this.item, checked: this.checkboxValue });
  }
  onRemoveItem(id: string): void {
    this.dataService.removeItem(id);
  }
}
