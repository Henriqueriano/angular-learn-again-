import { Injectable } from '@angular/core';
import { DataApi } from '../models/model-page-tree';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor( private http: HttpClient) { }

  getData(url:string): Observable<DataApi[]> {
   return this.http.get<DataApi[]>(url);
}
}
