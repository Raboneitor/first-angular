import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first-test.component';
import { CoverComponent } from './cover/cover.component';
import { NavComponent } from './nav/nav.component';
import { Products } from './product/product.component';
import { Us } from './us/us.component';

@NgModule({
  declarations: [
    AppComponent, FirstComponent, NavComponent, CoverComponent, Products, Us
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
