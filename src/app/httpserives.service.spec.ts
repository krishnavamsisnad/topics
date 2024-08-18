import { TestBed } from '@angular/core/testing';

import { HttpserivesService } from './httpserives.service';

describe('HttpserivesService', () => {
  let service: HttpserivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpserivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
