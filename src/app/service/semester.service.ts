import { HttpClient } from '@angular/common/http';
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
}
