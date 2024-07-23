import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbconComponent } from './dbcon.component';

describe('DbconComponent', () => {
  let component: DbconComponent;
  let fixture: ComponentFixture<DbconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
