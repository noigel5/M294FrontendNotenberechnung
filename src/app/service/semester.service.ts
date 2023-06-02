import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Semester } from '../dataaccess/Semester';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  readonly backendUrl = '/semester';

  constructor(private http: HttpClient) {}

  public getList(): Observable<Semester[]> {
    return this.http.get<Semester[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Semester> {
    return this.http.get<Semester>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(semester: Semester): Observable<Semester> {
    return this.http.put<Semester>(environment.backendBaseUrl + this.backendUrl, semester);
  }

  public save(semestername: string): Observable<Semester> {
    return this.http.post<Semester>(environment.backendBaseUrl + this.backendUrl, semestername);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
