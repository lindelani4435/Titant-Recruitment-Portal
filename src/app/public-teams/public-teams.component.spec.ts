import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTeamsComponent } from './public-teams.component';

describe('PublicTeamsComponent', () => {
  let component: PublicTeamsComponent;
  let fixture: ComponentFixture<PublicTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
