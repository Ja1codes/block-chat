import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendChipComponent } from './friend-chip.component';

describe('FriendChipComponent', () => {
  let component: FriendChipComponent;
  let fixture: ComponentFixture<FriendChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
