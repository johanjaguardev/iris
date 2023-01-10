import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IItem } from 'src/app/types/IItem';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: IItem;
  isTextHidden: boolean = true;
  value: string = '';
  constructor(private dataService: DataService) {
    this.item = {
      checked: false,
      description: '',
      id: '0',
    };
  }

  ngOnInit() {
    this.value = this.item.description;
  }

  onRemoveItem(id: string): void {
    this.dataService.removeItem(id);
  }
  onEditItem(id: string): void {
    this.isTextHidden = false;
  }
  onCheckItem(id: string): void {
    this.isTextHidden = true;
    this.dataService.updateItem({
      description: this.value,
      checked: this.item.checked,
      id: this.item.id,
    });
  }
  onClearItem(): void {
    this.isTextHidden = true;
  }
}
