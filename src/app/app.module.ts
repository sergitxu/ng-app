import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ZoomPageTemplateModule } from '@zoomui/page-template';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ZoomPageTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
