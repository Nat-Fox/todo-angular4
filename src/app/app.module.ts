import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdCheckboxModule, MdCardModule, MdIconModule} from '@angular/material';
import { Ng2Webstorage } from 'ng2-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    MdIconModule,
    Ng2Webstorage.forRoot({ prefix: 'todoApp', separator: '_' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
