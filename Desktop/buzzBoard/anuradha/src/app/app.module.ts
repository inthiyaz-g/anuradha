import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddclientComponent } from './addclient/addclient.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms'; // <-- import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    AddclientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
