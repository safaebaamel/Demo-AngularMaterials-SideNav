import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { IssuesComponent } from './issues/issues.component';
import { LabelsComponent } from './labels/labels.component';
import { NewIssueComponent } from './issues/new-issue/new-issue.component';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      {
        path: ':id',
        component: ProjectsComponent
      },
      {
        path: '',
        component: ProjectsComponent
      },
      {
        path: '34/labels',
        component: LabelsComponent
      }
    ]
  },
  {
    path: 'issues',
    children: [
      {
        path: 'new',
        component: NewIssueComponent
      },
      {
        path: '',
        component: IssuesComponent
      }
    ],
  },
  // {
  //   path: 'labels',
  //   component: LabelsComponent
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
