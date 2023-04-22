import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBreaklineComponent } from './chat-breakline.component';

describe('ChatBreaklineComponent', () => {
  let component: ChatBreaklineComponent;
  let fixture: ComponentFixture<ChatBreaklineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBreaklineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatBreaklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
