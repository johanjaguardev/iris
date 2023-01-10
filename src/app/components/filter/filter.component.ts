import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service';
import { IFilter } from 'src/app/types/IFilter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  states = ['All', 'Checked', 'Unchecked'];
  selectedState: IFilter;
  constructor(private dataService: DataService) {
    this.selectedState = 'All';
  }
  onStateChange() {
    this.dataService.updateFilter(this.selectedState);
  }
}
