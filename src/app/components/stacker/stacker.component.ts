import { Component } from '@angular/core';

@Component({
  selector: 'app-stacker',
  templateUrl: './stacker.component.html',
  styleUrls: ['./stacker.component.scss'],
})
export class StackerComponent {
  value = 'Text the new item';

  onClickAdd = () => {
    console.log('add');
  };
}
