import { TestBed } from '@angular/core/testing';

import { CardDalmiacService } from './card-dalmiac.service';

describe('CardDalmiacService', () => {
  let service: CardDalmiacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDalmiacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
