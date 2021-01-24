import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { allDataApi, spaceEndpoint } from './utils/app-const';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  getAllSpacePrograms(params) {
    return this.http.get(allDataApi + params);
  }
}
