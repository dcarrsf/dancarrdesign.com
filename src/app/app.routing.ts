import { RouterModule, Routes } from '@angular/router';

// Route components (Pages)
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

// Paths
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent}
];

// Export routes
export const routing = RouterModule.forRoot(routes);
