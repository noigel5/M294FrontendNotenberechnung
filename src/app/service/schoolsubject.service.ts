import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SchoolSubject } from '../dataaccess/SchoolSubject';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolsubjectService {

  readonly backendUrl = '/schoolsubject';

  constructor(private http: HttpClient) {}

  public getList(): Observable<SchoolSubject[]> {
    return this.http.get<SchoolSubject[]>(environment.backendBaseUrl + this.backendUrl);
  }
}
