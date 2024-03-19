import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeSuraComponent } from './components/home-sura/home-sura.component';
import { BlanLayoutComponent } from './components/blan-layout/blan-layout.component';
import { NgxLoadingModule } from "ngx-loading";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
   BlanLayoutComponent,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
