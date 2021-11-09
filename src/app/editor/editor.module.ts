import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [EditorModule],
  imports: [
    CommonModule,
    RichTextEditorAllModule,
    BrowserModule
  ],
  bootstrap: [EditorModule]
})
export class EditorModule { }
