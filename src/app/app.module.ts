import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeSuraComponent } from './components/home-sura/home-sura.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BlanLayoutComponent } from './components/blan-layout/blan-layout.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   RouterModule,
   BlanLayoutComponent,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
