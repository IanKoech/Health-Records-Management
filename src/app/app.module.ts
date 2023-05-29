import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DateFormatPipe } from './date-format.pipe';
import { MostVisitsDirective } from './most-visits.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    DateFormatPipe,
    MostVisitsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
