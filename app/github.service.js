System.register(['angular2/core', 'angular2/http', './github', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, github_1, Observable_1;
    var GithubService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (github_1_1) {
                github_1 = github_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            GithubService = (function () {
                function GithubService(http) {
                    this.http = http;
                    this._githubUrl = 'https://api.github.com/search/repositories?q=';
                }
                GithubService.prototype.getGithub = function (query) {
                    var queryUrl = "" + this._githubUrl + query;
                    return this.http.get(queryUrl)
                        .map(function (response) {
                        return response.json().items.map(function (item) {
                            // console.log("raw item", item); // uncomment if you want to debug
                            return new github_1.Github({
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
                };
                GithubService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                GithubService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GithubService);
                return GithubService;
            }());
            exports_1("GithubService", GithubService);
        }
    }
});
//  .map(res => <Github[]> res.json()) 
//# sourceMappingURL=github.service.js.map