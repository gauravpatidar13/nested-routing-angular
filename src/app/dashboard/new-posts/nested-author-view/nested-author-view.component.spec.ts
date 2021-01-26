import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedAuthorViewComponent } from './nested-author-view.component';

describe('NestedAuthorViewComponent', () => {
  let component: NestedAuthorViewComponent;
  let fixture: ComponentFixture<NestedAuthorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedAuthorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedAuthorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
