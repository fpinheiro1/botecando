import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicarBebidasPage } from './publicar-bebidas.page';

describe('PublicarBebidasPage', () => {
  let component: PublicarBebidasPage;
  let fixture: ComponentFixture<PublicarBebidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarBebidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicarBebidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
