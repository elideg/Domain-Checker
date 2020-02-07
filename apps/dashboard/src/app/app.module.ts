import { RouterModule } from '@angular/router';
import { UiLibModule } from '@domain-checker/ui-lib';
import { CoreDataModule, InterceptorService } from '@domain-checker/core-data';
import { MaterialModule } from '@domain-checker/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomainComponent } from './domain/domain.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DomainComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiLibModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreDataModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
