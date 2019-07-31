import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdetailsComponent } from './blogdetails.component';

describe('BlogdetailsComponent', () => {
  let component: BlogdetailsComponent;
  let fixture: ComponentFixture<BlogdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
