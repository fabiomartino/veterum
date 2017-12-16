// Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMLJdPhD6MLnEunf2TxRtc_WpjecKjZcU'
    }),
    AppRoutingModule
  ],
  providers: [],
  declarations: [ AppComponent, MapsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
