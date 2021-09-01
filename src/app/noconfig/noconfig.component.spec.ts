import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoconfigComponent } from './noconfig.component';

describe('NoconfigComponent', () => {
  let component: NoconfigComponent;
  let fixture: ComponentFixture<NoconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
