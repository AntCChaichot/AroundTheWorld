import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostUniversityPage } from './post-university.page';

describe('PostUniversityPage', () => {
  let component: PostUniversityPage;
  let fixture: ComponentFixture<PostUniversityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostUniversityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostUniversityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
