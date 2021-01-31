import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { allDataApi, spaceEndpoint } from './utils/app-const';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  getAllSpacePrograms(obj) {
    return this.http.get(allDataApi + this.generateQueryParams(obj)).pipe(
      tap((res: Array<any>) => {
        res.forEach((data) => {
          let cores_arr = data['rocket']?.['first_stage']?.['cores'];
          if ([true, false].includes(obj?.land_success)) {
            data['land_success'] = obj.land_success;
          } else {
            if (cores_arr.some((core) => core.land_success === true)) {
              data['land_success'] = true;
            } else if (cores_arr.some((core) => core.land_success === false)) {
              data['land_success'] = false;
            } else data['land_success'] = 'NA';
          }
        });
        return res;
      }),
      catchError(this.handleError([]))
    );
  }

  generateQueryParams(obj) {
    let url = '';
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        if (element !== null) url += '&' + key + '=' + element;
      }
    }
    return url;
  }

  private handleError(result) {
    return (error: any): Observable<any> => {
      console.error(error); // log to console instead
      // console.log(`${operation} failed: ${error.message}`);

      this.openSnackBar('Server Error', '');
      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }

  //error message notification
  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
