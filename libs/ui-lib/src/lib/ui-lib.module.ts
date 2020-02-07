import { MaterialModule } from '@domain-checker/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ToolbarComponent, WildComponent],
  exports: [
    ToolbarComponent,
    WildComponent
  ]
})
export class UiLibModule {}
