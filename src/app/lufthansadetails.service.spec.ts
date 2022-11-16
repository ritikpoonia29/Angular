import { TestBed } from '@angular/core/testing';

import { LufthansadetailsService } from './lufthansadetails.service';

describe('TravelagencydetailsService', () => {
  let service: LufthansadetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LufthansadetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
