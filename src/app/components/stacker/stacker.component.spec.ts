import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StackerComponent } from './stacker.component';
import { By } from '@angular/platform-browser';
const onClickAdd = () => {
  console.log('add');
};
describe('StackerComponent', () => {
  let component: StackerComponent;
  let fixture: ComponentFixture<StackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StackerComponent],
      imports: [
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClickAdd when button is clicked', () => {
    spyOn(component, 'onClickAdd');
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.onClickAdd).toHaveBeenCalled();
  });

  it('should exist stacker form control', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="stacker"]')
    ).toBeTruthy();
  });

  it('should exist element with stacker class', () => {
    expect(fixture.nativeElement.querySelector('.stacker')).toBeTruthy();
  });

  it('should exist stacker__icon form control', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="stacker__icon"]')
    ).toBeTruthy();
  });

  it('should exist element with stacker__icon class', () => {
    expect(fixture.nativeElement.querySelector('.stacker__icon')).toBeTruthy();
  });
});
