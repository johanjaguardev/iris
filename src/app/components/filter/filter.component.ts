import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  states = ['All', 'Checked', 'Unchecked'];
  selectedState: string = 'All';

  onStateChange() {
    console.log(`State has changed: ${this.selectedState}`);
  }
}
