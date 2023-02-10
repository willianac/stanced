import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutPutComponent } from './in-out-put.component';

describe('InOutPutComponent', () => {
  let component: InOutPutComponent;
  let fixture: ComponentFixture<InOutPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOutPutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOutPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
