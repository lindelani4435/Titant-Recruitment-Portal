import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAnnoucementComponent } from './public-annoucement.component';

describe('PublicAnnoucementComponent', () => {
  let component: PublicAnnoucementComponent;
  let fixture: ComponentFixture<PublicAnnoucementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicAnnoucementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAnnoucementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
