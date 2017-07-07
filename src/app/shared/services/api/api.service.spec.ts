import { inject, TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('Service: Api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ApiService]});
  });

  it('should have the correct title', inject([ApiService], (api) => {
    expect(api.strings.title).toBe('Senior Software Engineer');
  }));
});
