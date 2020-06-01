import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExibirPromocaoPage } from './exibir-promocao.page';

describe('ExibirPromocaoPage', () => {
  let component: ExibirPromocaoPage;
  let fixture: ComponentFixture<ExibirPromocaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirPromocaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExibirPromocaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
