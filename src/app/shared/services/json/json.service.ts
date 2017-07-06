import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// model
import { ConfigVO } from '../../models/config/config.model';

@Injectable()
export class JsonService {
  private jsonUrl = './_json/config.json';

  constructor(private http: Http) {}

  getConfig(): Observable<ConfigVO[]> {
    return this.http.get(this.jsonUrl)
                    .map(this.onSuccess)
                    .catch(this.onError);
  }

  private onSuccess(res: Response) {
    let body = res.json();
    // Check for data wrapper
    return (body.data || body || {});
  }

  private onError(error: Response | any) {
    console.log(error.statusText);
    return Observable.throw(error.json().error || 'Server error');
  }
}
