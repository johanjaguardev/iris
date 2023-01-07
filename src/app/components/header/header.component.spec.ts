import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should exist img logo', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="logo"]')
    ).toBeTruthy();
  });

  it('should exist img with logo class', () => {
    expect(fixture.nativeElement.querySelector('.logo')).toBeTruthy();
  });
});
