import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Issue {
  id: number;
  title: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private http: HttpClient ) { }
  
  createIssue(issue: Issue): Observable<Issue> {
    let header_node = {
      headers: new HttpHeaders(
        { 'PRIVATE-TOKEN': 'xaWi2mu2359vfdjTdz1s' })
      };

    return this.http.post<Issue>('https://localhost/api/v4/projects/' + issue.id + '/issues', issue, header_node);
  }

  getIssues(projectId: number) {
    let header_node = {
      headers: new HttpHeaders(
        { 'PRIVATE-TOKEN': 'xaWi2mu2359vfdjTdz1s' })
      };

    return this.http.get('https://localhost/api/v4/projects/' + projectId + '/issues', header_node);
  }

}
