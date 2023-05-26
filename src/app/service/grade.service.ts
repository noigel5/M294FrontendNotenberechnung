import { HttpClient } from '@angular/common/http';
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

  public getList(): Observable<Grade[]> {
    return this.http.get<Grade[]>(environment.backendBaseUrl + this.backendUrl);
  }
}
