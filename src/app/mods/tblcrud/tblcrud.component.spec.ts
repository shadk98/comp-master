import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblcrudComponent } from './tblcrud.component';

describe('TblcrudComponent', () => {
  let component: TblcrudComponent;
  let fixture: ComponentFixture<TblcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
