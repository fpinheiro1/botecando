import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardapiocomidasPage } from './cardapiocomidas.page';

describe('CardapiocomidasPage', () => {
  let component: CardapiocomidasPage;
  let fixture: ComponentFixture<CardapiocomidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapiocomidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardapiocomidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
