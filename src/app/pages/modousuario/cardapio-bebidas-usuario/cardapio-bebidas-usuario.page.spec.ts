import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardapioBebidasUsuarioPage } from './cardapio-bebidas-usuario.page';

describe('CardapioBebidasUsuarioPage', () => {
  let component: CardapioBebidasUsuarioPage;
  let fixture: ComponentFixture<CardapioBebidasUsuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioBebidasUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardapioBebidasUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
