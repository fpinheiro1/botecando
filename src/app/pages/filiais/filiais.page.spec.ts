import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiliaisPage } from './filiais.page';

describe('FiliaisPage', () => {
  let component: FiliaisPage;
  let fixture: ComponentFixture<FiliaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiliaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiliaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
