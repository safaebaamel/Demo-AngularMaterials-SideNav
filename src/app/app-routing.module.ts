import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { IssuesComponent } from './issues/issues.component';
import { LabelsComponent } from './labels/labels.component';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      {
        path: 'project/:id',
        component: ProjectsComponent
      },
      {
        path: '',
        component: ProjectsComponent
      },
    ]
  },
  {
    path: 'issues',
    component: IssuesComponent,
  },
  {
    path: 'labels',
    component: LabelsComponent
  }
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
