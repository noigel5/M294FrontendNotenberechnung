import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grade } from '../dataaccess/Grade';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  readonly backendUrl = '/grade';

  constructor(private http: HttpClient) {}

  public getList(id: number): Observable<Grade[]> {
    return this.http.get<Grade[]>(environment.backendBaseUrl + '/gradebyschoolsubjectid' + `/${id}`);
  }

  public getOne(id: number): Observable<Grade> {
    return this.http.get<Grade>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(semester: Grade): Observable<Grade> {
    return this.http.put<Grade>(environment.backendBaseUrl + this.backendUrl, semester);
  }

  public save(semestername: string): Observable<Grade> {
    return this.http.post<Grade>(environment.backendBaseUrl + this.backendUrl, semestername);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
