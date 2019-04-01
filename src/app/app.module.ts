import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrdHeadComponent } from './ordhead.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatInputModule
} from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatInputModule
   ],
  declarations: [ AppComponent, OrdHeadComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
