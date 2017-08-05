import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // MANUALLY DO THIS FOR FORMS!
import { HttpModule } from '@angular/http'; // MANUALLY DO THIS FOR SERVICES!
import { AppComponent } from './app.component';
import { HttpService } from './http.service'; // MANUALLY DO THIS FOR SERVICES!

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // MANUALLY DO THIS FOR FORMS!
    HttpModule // MANUALLY DO THIS FOR SERVICES!
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
