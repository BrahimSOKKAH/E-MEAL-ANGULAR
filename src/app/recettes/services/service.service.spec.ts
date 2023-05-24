import { TestBed } from '@angular/core/testing';

import { Recetteservice } from './service.service';

describe('ServiceService', () => {
  let service: Recetteservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Recetteservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
