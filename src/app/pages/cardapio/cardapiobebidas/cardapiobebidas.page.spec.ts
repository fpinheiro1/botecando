import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardapiobebidasPage } from './cardapiobebidas.page';

describe('CardapiobebidasPage', () => {
  let component: CardapiobebidasPage;
  let fixture: ComponentFixture<CardapiobebidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapiobebidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardapiobebidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
