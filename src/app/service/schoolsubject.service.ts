import { HttpClient, HttpResponse } from '@angular/common/http';
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

  public getList(id: number): Observable<SchoolSubject[]> {
    return this.http.get<SchoolSubject[]>(environment.backendBaseUrl + '/schoolsubjectbysemester' + `/${id}`);
  }

  public getOne(id: number): Observable<SchoolSubject> {
    return this.http.get<SchoolSubject>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(semester: SchoolSubject): Observable<SchoolSubject> {
    return this.http.put<SchoolSubject>(environment.backendBaseUrl + this.backendUrl, semester);
  }

  public save(semestername: string): Observable<SchoolSubject> {
    return this.http.post<SchoolSubject>(environment.backendBaseUrl + this.backendUrl, semestername);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
