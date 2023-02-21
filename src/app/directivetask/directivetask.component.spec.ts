import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivetaskComponent } from './directivetask.component';

describe('DirectivetaskComponent', () => {
  let component: DirectivetaskComponent;
  let fixture: ComponentFixture<DirectivetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivetaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
