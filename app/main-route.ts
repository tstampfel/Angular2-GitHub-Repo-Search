import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AppComponent} from './app.component';
import {RepoDetails} from './RepoDetails';


@Component({
  selector: 'main-router',
  template: `
    <router-outlet></router-outlet>
  `,
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES]
 
})
@RouteConfig([
  { path: '/',       component: AppComponent,        name: 'Home', useAsDefault: true },
  
  { path: '/repodetails/:reponame', component: RepoDetails, name: 'RepoDetails' },
])
export class MainRoute {

  

}