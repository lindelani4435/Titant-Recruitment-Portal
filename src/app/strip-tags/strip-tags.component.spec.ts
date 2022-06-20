import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripTagsComponent } from './strip-tags.component';

describe('StripTagsComponent', () => {
  let component: StripTagsComponent;
  let fixture: ComponentFixture<StripTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
