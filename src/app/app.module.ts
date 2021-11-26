import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { IssuesComponent } from './issues/issues.component';
import { LabelsComponent } from './labels/labels.component';
import { EditorComponent } from './editor/editor.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ColorPickerModule } from 'ngx-color-picker';
import { NewIssueComponent } from './issues/new-issue/new-issue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    IssuesComponent,
    LabelsComponent,
    EditorComponent,
    NewIssueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RichTextEditorAllModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [EditorComponent, ColorPickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
