import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/maps/maps.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { AboutComponent  } from './components/about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**',   component: ErrorsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
