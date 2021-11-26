import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Issue, IssuesService } from 'src/app/services/issues/issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  displayedColums: String[] = ['id', 'title', 'description'];
  
  constructor( private issueService: IssuesService) {}

  ngOnInit(): void {
    this.ngIssue();
  }

  issues!: any;

  ngIssue(): void {
    this.issueService.getIssues(34)
      .subscribe(issues => this.issues = issues);
  }
}
