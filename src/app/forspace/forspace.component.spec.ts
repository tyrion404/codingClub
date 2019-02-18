import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForspaceComponent } from './forspace.component';

describe('ForspaceComponent', () => {
  let component: ForspaceComponent;
  let fixture: ComponentFixture<ForspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
