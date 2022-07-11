import { TestBed } from '@angular/core/testing';

import { ArModelService } from './ar-model.service';

describe('ArModelService', () => {
  let service: ArModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
