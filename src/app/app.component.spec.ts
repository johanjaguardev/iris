import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { StackerComponent } from './components/stacker/stacker.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let h1: HTMLElement;
  let appHeader: HTMLElement;
  let appFilter: HTMLElement;
  let appStacker: HTMLElement;
  let appList: HTMLElement;
  let appItem: HTMLElement;
  let listH2: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FilterComponent,
        ListComponent,
        StackerComponent,
        ItemComponent,
      ],
      imports: [MatFormFieldModule, MatSelectModule],
    }).compileComponents();
    component = new AppComponent();
    fixture = TestBed.createComponent(AppComponent);
    h1 = fixture.nativeElement.querySelector('h1');
    appHeader = fixture.nativeElement.querySelector('[data-test="header"]');
    appFilter = fixture.nativeElement.querySelector('[data-test="filter"]');
    appStacker = fixture.nativeElement.querySelector('[data-test="stacker"]');
    appList = fixture.nativeElement.querySelector('[data-test="list"]');
    // appItem = fixture.nativeElement.querySelector('[data-test="item"]');
    listH2 = fixture.nativeElement.querySelector('[data-test="list__h2"]');
  });

  it('Should create H1 Element', () => {
    expect(h1).toBeTruthy();
  });
  it('should display To do List title', () => {
    expect(h1.textContent).toBe('To do List');
  });
  it('Should create filter Element', () => {
    expect(appFilter).toBeTruthy();
  });
  it('Should create stacker Element', () => {
    expect(appStacker).toBeTruthy();
  });
  it('Should create list Element', () => {
    expect(appList).toBeTruthy();
  });
});
