import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Github}       from './github';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GithubService {
  constructor(private http:Http) {

  }

  private _githubUrl = 'https://api.github.com/search/repositories?q=';

  getGithub(query:string) {

    let queryUrl: string = `${this._githubUrl}${query}`;
    return this.http.get(queryUrl)
                    .map((response: Response) => {
                    return (<any>response.json()).items.map(item => {
                    // console.log("raw item", item); // uncomment if you want to debug
                    return new Github({
                        name: item.name,
                        owner: item.owner.login,
                        fullname: item.full_name,
                        forks: item.forks,
                        watchers: item.watchers,
                        language: item.language,
                        subscribers: item.subscribers_url,
                        updated: item.updated_at,
                        contributorsUrl: item.contributors_url,
                        avatar: item.owner.avatar_url
                    });
                });
            })
           .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}






//  .map(res => <Github[]> res.json())