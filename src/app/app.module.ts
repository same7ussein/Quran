import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeSuraComponent } from './components/home-sura/home-sura.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeSuraComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
