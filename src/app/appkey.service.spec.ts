import { TestBed } from '@angular/core/testing';

import { AppkeyService } from './appkey.service';

describe('AppkeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppkeyService = TestBed.get(AppkeyService);
    expect(service).toBeTruthy();
  });
});
