System.register(['angular2/core', './github.service', './searchbox', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, github_service_1, searchbox_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (searchbox_1_1) {
                searchbox_1 = searchbox_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.updateResults = function (results) {
                    this.results = results;
                    // console.log("results:", this.results); // uncomment to take a look
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [searchbox_1.SearchBox, router_1.ROUTER_DIRECTIVES],
                        template: "\n\n\n<div class=\"container-fluid\">\n      <div class=\"row\">\n            <div class=\"col-sm-4\">\n             </div>\n\n <div class=\"col-sm-4\">\n      <h1>GitHub Repo Search</h1>\n        <div class='container'>\n              <div class=\"row\">\n                  <div class=\"input-group input-group-lg col-sm-4\" >\n                    <search-box\n                  \n                    (results)=\"updateResults($event)\"\n                    ></search-box>\n              </div>\n            </div>\n<div class=\"col-sm-4\">\n        <h4>Results:</h4>\n             <ul class=\"list-unstyled\" >\n                <li *ngFor=\"let repo of results\">\n\n                        <div class=\"panel panel-default\" >\n                            <div class=\"panel-body\">\n                              <a [routerLink]=\" ['RepoDetails', {reponame: repo.fullname}] \">\n                              \n                                  {{ repo.name }}\n                                </a>\n                                - <img src=\"{{repo.avatar}}\" alt=\"\" class=\"img-responsive\" height=\"42\" width=\"42\" style=\"float: left; margin-right:7px;\">\n                                 {{repo.owner}} <div style=\"float: right;\"> <img src=\"app/images/fork.png\"  height=\"17\" width=\"20\" >:{{repo.forks}}  <img src=\"app/images/eye.jpg\"  height=\"17\" width=\"20\" >:{{repo.watchers}} </div>\n                                 <div [hidden]=\"true\"> <img src=\"app/images/language.png\"  height=\"17\" width=\"20\" > </div>\n                                 <div [hidden]=\"true\">  <img src=\"app/images/pen.jpg\"  height=\"17\" width=\"20\" > </div>\n                            </div>\n                          </div>\n\n\n                          </li>\n                        </ul>\n                      </div>\n                  </div>\n                </div>\n\n            <div class=\"col-sm-4\">\n\n            </div>\n\n        </div>\n   </div>\n \n   ",
                        providers: [github_service_1.GithubService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map