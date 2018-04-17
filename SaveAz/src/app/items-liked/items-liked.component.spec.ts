import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsLikedComponent } from './items-liked.component';

describe('ItemsLikedComponent', () => {
  let component: ItemsLikedComponent;
  let fixture: ComponentFixture<ItemsLikedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsLikedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
