import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedLikesViewComponent } from './nested-likes-view.component';

describe('NestedLikesViewComponent', () => {
  let component: NestedLikesViewComponent;
  let fixture: ComponentFixture<NestedLikesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedLikesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedLikesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
