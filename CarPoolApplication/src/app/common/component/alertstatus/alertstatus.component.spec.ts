import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertstatusComponent } from './alertstatus.component';

describe('AlertstatusComponent', () => {
  let component: AlertstatusComponent;
  let fixture: ComponentFixture<AlertstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
