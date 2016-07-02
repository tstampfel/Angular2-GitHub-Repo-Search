import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {MainRoute} from './main-route'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {APP_BASE_HREF} from 'angular2/platform/common';
import {provide} from 'angular2/core';


bootstrap(MainRoute, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide
(APP_BASE_HREF, {useValue: '/'})
 ]);

//bootstrap(AppComponent, [HTTP_PROVIDERS]);