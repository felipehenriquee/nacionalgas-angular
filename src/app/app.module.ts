import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IndividualComponent } from './pages/individual/individual.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipe/filter.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { httpInterceptorProviders } from './services/http-interceptors';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { ButtonRaComponent } from './shared/button-ra/button-ra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndividualComponent,
    FilterPipe,
    SearchPipe,
    TutorialComponent,
    ButtonRaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxQRCodeModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
