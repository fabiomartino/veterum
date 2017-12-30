// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Dependencies
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { AboutComponent } from './components/about/about.component';
import { MapsComponent } from './components/maps/maps.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMLJdPhD6MLnEunf2TxRtc_WpjecKjZcU'
      // 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    AgmSnazzyInfoWindowModule,
    AppRoutingModule
  ],
  providers: [],
  declarations: [ AppComponent, MapsComponent, HomeComponent, ErrorsComponent, NavbarComponent, FooterComponent, AboutComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
