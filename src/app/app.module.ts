import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {InscrireService} from './inscrire.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule
  ],
  providers: [InscrireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
