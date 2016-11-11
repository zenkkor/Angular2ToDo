import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';

// Bootstrap
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ToDoAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
