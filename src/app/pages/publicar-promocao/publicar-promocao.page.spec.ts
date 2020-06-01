import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicarPromocaoPage } from './publicar-promocao.page';

describe('PublicarPromocaoPage', () => {
  let component: PublicarPromocaoPage;
  let fixture: ComponentFixture<PublicarPromocaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarPromocaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicarPromocaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
