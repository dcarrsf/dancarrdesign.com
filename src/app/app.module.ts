import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Dependencies
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BackgroundDirective } from './shared/directives';
import { ApiService, JsonService } from './shared/services';
import { UppercasePipe } from './shared/pipes'
import { HeaderComponent, NavbarComponent, LogoComponent } from './shared/components';
import { routing } from './app.routing';

// Hot reloading
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

// Root module
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    NavbarComponent,
    LogoComponent,
    UppercasePipe,
    BackgroundDirective
  ],
  providers: [
    ApiService,
    JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
