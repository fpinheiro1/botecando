import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicarComidasPage } from './publicar-comidas.page';

describe('PublicarComidasPage', () => {
  let component: PublicarComidasPage;
  let fixture: ComponentFixture<PublicarComidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarComidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicarComidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
