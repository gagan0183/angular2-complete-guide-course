import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }