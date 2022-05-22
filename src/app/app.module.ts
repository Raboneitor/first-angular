import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first-test.component';
import { CoverComponent } from './cover/cover.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent, FirstComponent, NavComponent, CoverComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
