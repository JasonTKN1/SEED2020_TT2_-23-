import { TestBed } from '@angular/core/testing';

import { TransactionViewService } from './transaction-view.service';

describe('TransactionViewService', () => {
  let service: TransactionViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
