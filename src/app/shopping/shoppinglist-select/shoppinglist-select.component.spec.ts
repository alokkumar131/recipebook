import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinglistSelectComponent } from './shoppinglist-select.component';

describe('ShoppinglistSelectComponent', () => {
  let component: ShoppinglistSelectComponent;
  let fixture: ComponentFixture<ShoppinglistSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppinglistSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinglistSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
