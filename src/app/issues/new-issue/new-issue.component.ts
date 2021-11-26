import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from 'src/app/services/issues/issues.service';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  currentItem = 'description';
  issueForm!: FormGroup;
  constructor(private issueService: IssuesService) { }

  ngOnInit(): void {
    this.issueForm = new FormGroup({
      id: new FormControl(34),
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.issueForm.value);
    this.issueService.createIssue(this.issueForm.value).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

}
