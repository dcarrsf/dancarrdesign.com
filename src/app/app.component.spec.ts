import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from './shared/services/';
import { AppComponent } from './app.component';

describe('App', () => {
  // Fixture
  const html = `
  <main>
    <router-outlet></router-outlet>
  </main>`;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [ApiService, provideRoutes([])]
    });
    TestBed.overrideComponent(AppComponent, { set: { template: html }});
  });

  it('should have an title', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.title).toEqual('Senior Software Engineer');
  });

});
