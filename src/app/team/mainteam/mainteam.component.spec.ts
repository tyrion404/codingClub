import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainteamComponent } from './mainteam.component';

describe('MainteamComponent', () => {
  let component: MainteamComponent;
  let fixture: ComponentFixture<MainteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
