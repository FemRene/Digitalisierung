import { TestBed } from '@angular/core/testing';

import { DataPriceService } from './data-price.service';

describe('DataPriceService', () => {
  let service: DataPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
