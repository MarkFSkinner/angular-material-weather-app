import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { SearchComponent } from './user-input/search/search.component';

import { UserInputModule } from './user-input/user-input.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserInputModule
    //SearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
