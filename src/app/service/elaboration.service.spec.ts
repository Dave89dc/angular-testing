import { TestBed } from '@angular/core/testing';

import { ElaborationService } from './elaboration.service';

describe('ElaborationService', () => {
  let service: ElaborationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElaborationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fromStringToArrayOfNumbers should create an arry of strings of number', () => {
    expect(service.fromStringToArrayOfNumbers('uh 1 lo 23 sadf 3')).toEqual(['1', '23', '3'])
  });

  it('filterAnomalies should create clamp array with top and bootm values', () => {
    expect(service.filterAnomalies([10, 20, 55, -10, -7, 15], 10, -10)).toEqual([10, 10, 10, -10, -7, 10])
  });

  it('keepEven should keep pnly even numbers', () => {
    const testElements = [[1, 2, 3, 4, 5, 6], [2, 4, 6]];
    expect(testElements.map(a => service.keepEven(a))).toEqual([[1, 2, 3, 4, 5, 6], [2, 4, 6]])
  });
});
