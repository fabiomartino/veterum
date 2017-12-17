// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMLJdPhD6MLnEunf2TxRtc_WpjecKjZcU'
    }),
    AppRoutingModule
  ],
  providers: [],
  declarations: [ AppComponent, MapsComponent, NavbarComponent, FooterComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
