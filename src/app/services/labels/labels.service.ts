import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface Label {
  id: number;
  name: string;
  description: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class LabelsService {

  constructor(private http: HttpClient, private router: Router, ) { }
  
  createLabel(label: Label): Observable<Label> {
    let header_node = {
      headers: new HttpHeaders(
        { 'PRIVATE-TOKEN': 'xaWi2mu2359vfdjTdz1s' })
      };

    return this.http.post<Label>('https://localhost/api/v4/projects/' + label.id + '/labels', label, header_node);
  }

}
