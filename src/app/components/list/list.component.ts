import { Component } from '@angular/core';
import { IItem } from '../../types/IItem';
import { DataService } from 'src/app/services/data-service';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  items$: Observable<IItem[]>;
  // Keep the DataService private
  private dataService: DataService;
  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.items$ = this.dataService.items$;
  }
}
