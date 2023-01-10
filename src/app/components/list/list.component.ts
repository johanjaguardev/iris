import { Component } from '@angular/core';
import { IItem } from '../../types/IItem';
import { DataService } from 'src/app/services/data-service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  items: IItem[];
  constructor(private dataService: DataService) {
    this.items = this.dataService.getItems();
  }
  getItems() {
    this.items = this.dataService.getItems();
  }
}
