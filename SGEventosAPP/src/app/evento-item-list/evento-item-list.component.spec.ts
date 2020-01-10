import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoItemListComponent } from './evento-item-list.component';

describe('EventoItemListComponent', () => {
  let component: EventoItemListComponent;
  let fixture: ComponentFixture<EventoItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
