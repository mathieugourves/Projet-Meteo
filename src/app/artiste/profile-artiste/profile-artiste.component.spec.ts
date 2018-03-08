import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileArtisteComponent } from './profile-artiste.component';

describe('ProfileArtisteComponent', () => {
  let component: ProfileArtisteComponent;
  let fixture: ComponentFixture<ProfileArtisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileArtisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
