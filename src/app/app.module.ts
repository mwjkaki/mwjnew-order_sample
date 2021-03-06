import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { PhoneDetailComponent } from "./phonedetail.component";
//import { PhoneInputComponent }  from "./phoneinput.component";
import { PhoneUtilModule } from "./phoneutil/phoneutil.module";
import { Logger }          from "./logger.service";


import { OrdHeadComponent } from './ordhead.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatDialogModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDatepickerModule,
  　MatNativeDateModule,
  　MatOptionModule,
  　MatPaginatorModule,
    MatExpansionModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    PhoneUtilModule
   ],
  declarations: [ AppComponent, OrdHeadComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ Logger ] // Loggerクラスをサービスとして登録 ...（2）
})
export class AppModule { }
