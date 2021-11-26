import { Component, OnInit, Input } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
/**
 * Rich Text Editor Markdown demo with table
 */
import { ViewChild } from '@angular/core';
import { RichTextEditorComponent, ToolbarService, LinkService } from '@syncfusion/ej2-angular-richtexteditor';
import { ImageService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, KeyboardEventArgs, isNullOrUndefined } from '@syncfusion/ej2-base';
import * as marked from 'marked';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService],
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  @Input() item = '';  
  @ViewChild('mdPreview')
  public rteObj: RichTextEditorComponent | any;
  public textArea: HTMLTextAreaElement | any;
  public mdsource: HTMLElement | any;
  public mdSplit: HTMLElement | any;
  public htmlPreview: HTMLElement | any;
  public tools: object = {
      items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList',
              'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable', '|',
          {
              tooltipText: 'Preview',
              template: '<button id="preview-code">e' +
              '<span></span></button>'
          }, {
              tooltipText: 'Split Editor',
              template: '<button id="MD_Preview" class="e-tbar-btn e-control e-btn e-icon-btn">' +
              '<span class="e-btn-icon e-view-side e-icons"></span></button>'
          }, 'FullScreen', '|', 'Undo', 'Redo']
  };
  public mode: string = 'Markdown';
  public onCreate(): void {
      let script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
      document.head.appendChild(script);
      this.textArea = this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement;
      this.textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
          this.markDownConversion();
      });
      this.mdsource = document.getElementById('preview-code');
      this.mdsource.addEventListener('click', (e: MouseEvent) => {
          this.fullPreview({ mode: true, type: 'preview' });
          if ((e.target as HTMLElement).parentElement?.classList.contains('e-active')) {
              this.rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                  'UnorderedList', 'CreateLink', 'Image', 'CreateTable']);
              (e.target as HTMLElement).parentElement?.parentElement?.nextElementSibling?.classList.add('e-overlay');
          } else {
              this.rteObj.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                  'UnorderedList', 'CreateLink', 'Image', 'CreateTable']);
              (e.target as HTMLElement).parentElement?.nextElementSibling?.classList.remove('e-overlay');
          }
      });
      this.mdSplit = document.getElementById('MD_Preview');
      this.mdSplit.addEventListener('click', (e: MouseEvent) => {
          if (this.rteObj.element.classList.contains('e-rte-full-screen')) {
              this.fullPreview({ mode: true, type: '' });
          }
          this.mdsource.classList.remove('e-active');
          this.rteObj.showFullScreen();
      });
  }
  public actionComplete(e: any): void {
      if (e.targetItem === 'Maximize' && isNullOrUndefined(e.args)) {
          this.fullPreview({ mode: true, type: '' });
      } else if (!this.mdSplit.parentElement.classList.contains('e-overlay')) {
          if (e.targetItem === 'Minimize') {
              this.textArea.style.display = 'block';
              this.textArea.style.width = '100%';
              if (this.htmlPreview) { this.htmlPreview.style.display = 'none'; }
              this.mdSplit.classList.remove('e-active');
              this.mdsource.classList.remove('e-active');
          }
          this.markDownConversion();
      }
  }
  public markDownConversion(): void {
      if (this.mdSplit.classList.contains('e-active')) {
          let id: string = this.rteObj.getID() + 'html-preview';
          let htmlPreview: HTMLElement = this.rteObj.element.querySelector('#' + id) as HTMLElement;
          htmlPreview.innerHTML = marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
      }
  }
  public fullPreview(e: { [key: string]: string | boolean }): void {
      let id: string = this.rteObj.getID() + 'html-preview';
      this.htmlPreview = this.rteObj.element.querySelector('#' + id) as HTMLElement;
      if ((this.mdsource.classList.contains('e-active') || this.mdSplit.classList.contains('e-active')) && e.mode) {
          this.mdsource.classList.remove('e-active');
          this.mdSplit.classList.remove('e-active');
          this.textArea.style.display = 'block';
          this.textArea.style.width = '100%';
          this.htmlPreview.style.display = 'none';
      } else {
          this.mdsource.classList.add('e-active');
          this.mdSplit.classList.add('e-active');
          if (!this.htmlPreview) {
              this.htmlPreview = createElement('div', { className: 'e-content' });
              this.htmlPreview.id = id;
              this.textArea.parentNode.appendChild(this.htmlPreview);
          }
          if (e.type === 'preview') {
              this.textArea.style.display = 'none';
              this.htmlPreview.classList.add('e-pre-source');
          } else {
              this.htmlPreview.classList.remove('e-pre-source');
              this.textArea.style.width = '50%';
          }
          this.htmlPreview.style.display = 'block';
          this.htmlPreview.innerHTML = marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
      }
  }

}
