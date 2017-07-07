import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { JsonService } from './json.service';

describe('Service: Json', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [JsonService]
    });
  });

  it('should be created', inject([JsonService], (service: JsonService) => {
    expect(service).toBeTruthy();
  }));
});
