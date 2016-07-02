import {Component} from 'angular2/core';
import {GithubService} from './github.service';
import {Github} from './github';
import{SearchBox} from './searchbox';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http'
@Component({
   selector: 'my-app',
   directives: [SearchBox, ROUTER_DIRECTIVES],
   template: `


<div class="container-fluid">
      <div class="row">
            <div class="col-sm-4">
             </div>

 <div class="col-sm-4">
      <h1>GitHub Repo Search</h1>
        <div class='container'>
              <div class="row">
                  <div class="input-group input-group-lg col-sm-4" >
                    <search-box
                  
                    (results)="updateResults($event)"
                    ></search-box>
              </div>
            </div>
<div class="col-sm-4">
        <h4>Results:</h4>
             <ul class="list-unstyled" >
                <li *ngFor="let repo of results">

                        <div class="panel panel-default" >
                            <div class="panel-body">
                              <a [routerLink]=" ['RepoDetails', {reponame: repo.fullname}] ">
                              
                                  {{ repo.name }}
                                </a>
                                - <img src="{{repo.avatar}}" alt="" class="img-responsive" height="42" width="42" style="float: left; margin-right:7px;">
                                 {{repo.owner}} <div style="float: right;"> <img src="app/images/fork.png"  height="17" width="20" >:{{repo.forks}}  <img src="app/images/eye.jpg"  height="17" width="20" >:{{repo.watchers}} </div>
                                 <div [hidden]="true"> <img src="app/images/language.png"  height="17" width="20" > </div>
                                 <div [hidden]="true">  <img src="app/images/pen.jpg"  height="17" width="20" > </div>
                            </div>
                          </div>


                          </li>
                        </ul>
                      </div>
                  </div>
                </div>

            <div class="col-sm-4">

            </div>

        </div>
   </div>
 
   `,
   providers: [GithubService]
   
})
export class AppComponent {

//constructor(@Inject(Http) public http: Http) {}
results: Github[]; 

updateResults(results: Github[]): void {
        this.results = results;
        // console.log("results:", this.results); // uncomment to take a look
    }
  
}


