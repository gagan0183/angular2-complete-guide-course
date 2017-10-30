import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home-component.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from'./user/user-edit.component';
import { UserDetailGuard } from './user/user-detail.guard';
import { UserEditGuard } from './user/user.edit.guard';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserEditGuard, UserDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
