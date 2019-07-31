import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaingalleryComponent } from './maingallery.component';

describe('MaingalleryComponent', () => {
  let component: MaingalleryComponent;
  let fixture: ComponentFixture<MaingalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaingalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaingalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
