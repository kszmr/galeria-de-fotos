import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaleriaComponentComponent } from './galeria-component/galeria-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
