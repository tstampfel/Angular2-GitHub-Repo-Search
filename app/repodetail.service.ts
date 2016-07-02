import {Injectable, provide} from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Contributors} from './contributors'
import {Issues} from './issues';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()
export class DetailsService {
  
  constructor(public http: Http) {
  }

private _contUrl: string = 'https://api.github.com/repos/';

   
 getContributors(params: string): Observable<Contributors[]> {
    let queryURL: string = `${this._contUrl}${params}/contributors`;
    return this.http.get(queryURL)
    .map(res => res.json());
  }   

getIssues(params: string): Observable<Issues[]> {
    let queryURL: string = `${this._contUrl}${params}/issues`;
    return this.http.get(queryURL)
    .map(res => res.json());
  }   


 

 

 
}



