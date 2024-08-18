import { TestBed } from '@angular/core/testing';

import { DataserivesService } from './dataserives.service';

describe('DataserivesService', () => {
  let service: DataserivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataserivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
