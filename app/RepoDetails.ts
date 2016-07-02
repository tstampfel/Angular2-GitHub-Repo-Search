import {Component, OnInit} from 'angular2/core';
import {Github} from './github';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouteParams, ROUTER_PROVIDERS} from 'angular2/router';
import {DetailsService} from './repodetail.service'
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Observable} from 'rxjs/Observable';
import {Contributors} from './contributors';
import {Issues} from './issues';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
@Component({
   selector: 'repodetails',
   directives: [ ROUTER_DIRECTIVES ],
  
   template: `
   <center><h1>Repo Details</h1></center>

<div class="container-fluid">
<center> <h2>{{name}}</h2> </center>
<div class="row">
<div class="col-sm-4">
 <strong>Information</strong>
      <div class="panel panel-default">
  <div class="panel-body">
  <img src="{{image}}" alt="" class="img-responsive" height="42" width="42"> <strong>{{owner}}</strong>
      <div> <img src="app/images/fork.png"  height="17" width="20" >:  {{forks}} </div>
     <div> <img src="app/images/eye.jpg"  height="17" width="20" >: {{watcher}} </div>
      <div> <img src="app/images/language.png"  height="17" width="20" >: {{language}} </div>
      <div>  <img src="app/images/pen.jpg"  height="17" width="20" >: {{subscribers}} </div>
  
  </div>
</div>
    <strong>  <a [routerLink]=" ['Home'] ">Back</a> </strong>
  </div>


  <div class="col-sm-4">
  <strong>Contributors</strong>
    <ul  class="list-unstyled">
 <li *ngFor=" let contributor of contributors">
    <div class="panel panel-default">
  <div class="panel-body"> 
 

   <center> <img src="{{contributor.avatar_url}}" alt="" class="img-responsive" height="42" width="42">
      <a href="#" title="{{ contributor.url }} "   data-toggle="popover" data-trigger="hover" >{{ contributor.login }}</a> </center>
       
       
     
     </div>
</div>
</li>
    
   </ul>
  </div>
  <div class="col-sm-4">
     <strong>Issues</strong>
    <ul class="list-unstyled">
     <li *ngFor=" let issue of issues">
      <div class="panel panel-default">
  <div class="panel-body"> 
      <a href="#" title="issue id: {{ issue.id }} "   data-toggle="popover" data-trigger="hover" >{{ issue.user.login }}</a>  - {{issue.title}} 
         </div>
</div>
     </li>
   </ul>
  </div>
</div>
</div>
   

   `,
   providers: [DetailsService, HTTP_PROVIDERS]
   
})
export class RepoDetails implements OnInit{
image:string;
owner: string;
name: string;
forks:number;
watcher:number;
language:string;
subscribers:number;
reponame:string;
private _repoUrl: string ='https://api.github.com/repos/';

private contributors : Contributors[];
private issues: Issues[];
errorString: string;


//errorMessage  : string;


constructor( public detail: DetailsService, public params: RouteParams, public http: Http){
      this.reponame = this.params.get('reponame');
      console.log(this.reponame)
      this.http = http;

}


ngOnInit() {
         this.getInfo(this.params.get('reponame'));
         this.getContr(this.params.get('reponame'));
         this.getIssues(this.params.get('reponame'));
        }
getInfo(params: string){
       let queryURL: string = `${this._repoUrl}${params}`;
      this.http.get(queryURL)
        .map(res => res.json())
        .subscribe((quote) =>{
          this.owner = quote.owner.login;
          this.name = quote.name;
          this.image = quote.owner.avatar_url;
          this.forks = quote.forks;
          this.subscribers = quote.subscribers_count;
          this.watcher = quote.watchers;
          this.language = quote.language;
          console.log(quote)
        });
              
  }
getContr(param:string){
         this.detail.getContributors(param)
         .subscribe(       
              contributors => this.contributors = contributors,
              error => this.errorString = <any> error
            );    
   }
getIssues(param:string){
         this.detail.getIssues(param)
         .subscribe(       
              issues => this.issues = issues,
              error => this.errorString = <any> error
                          );    



    }
}
