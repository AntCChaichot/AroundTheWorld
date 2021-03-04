import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCountryPage } from './create-country.page';

describe('CreateCountryPage', () => {
  let component: CreateCountryPage;
  let fixture: ComponentFixture<CreateCountryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCountryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
