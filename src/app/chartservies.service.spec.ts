import { TestBed } from '@angular/core/testing';

import { ChartserviesService } from './chartservies.service';

describe('ChartserviesService', () => {
  let service: ChartserviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartserviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
