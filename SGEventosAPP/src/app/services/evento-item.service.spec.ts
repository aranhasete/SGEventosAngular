import { TestBed } from '@angular/core/testing';

import { EventoItemService } from './evento-item.service';

describe('EventoItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventoItemService = TestBed.get(EventoItemService);
    expect(service).toBeTruthy();
  });
});
