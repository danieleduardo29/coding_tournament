import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
