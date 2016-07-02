System.register(['angular2/core', 'angular2/router', './repodetail.service', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, router_1, repodetail_service_1, http_1;
    var RepoDetails;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (repodetail_service_1_1) {
                repodetail_service_1 = repodetail_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            RepoDetails = (function () {
                //errorMessage  : string;
                function RepoDetails(detail, params, http) {
                    this.detail = detail;
                    this.params = params;
                    this.http = http;
                    this._repoUrl = 'https://api.github.com/repos/';
                    this.reponame = this.params.get('reponame');
                    console.log(this.reponame);
                    this.http = http;
                }
                RepoDetails.prototype.ngOnInit = function () {
                    this.getInfo(this.params.get('reponame'));
                    this.getContr(this.params.get('reponame'));
                    this.getIssues(this.params.get('reponame'));
                };
                RepoDetails.prototype.getInfo = function (params) {
                    var _this = this;
                    var queryURL = "" + this._repoUrl + params;
                    this.http.get(queryURL)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (quote) {
                        _this.owner = quote.owner.login;
                        _this.name = quote.name;
                        _this.image = quote.owner.avatar_url;
                        _this.forks = quote.forks;
                        _this.subscribers = quote.subscribers_count;
                        _this.watcher = quote.watchers;
                        _this.language = quote.language;
                        console.log(quote);
                    });
                };
                RepoDetails.prototype.getContr = function (param) {
                    var _this = this;
                    this.detail.getContributors(param)
                        .subscribe(function (contributors) { return _this.contributors = contributors; }, function (error) { return _this.errorString = error; });
                };
                RepoDetails.prototype.getIssues = function (param) {
                    var _this = this;
                    this.detail.getIssues(param)
                        .subscribe(function (issues) { return _this.issues = issues; }, function (error) { return _this.errorString = error; });
                };
                RepoDetails = __decorate([
                    core_1.Component({
                        selector: 'repodetails',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n   <center><h1>Repo Details</h1></center>\n\n<div class=\"container-fluid\">\n<center> <h2>{{name}}</h2> </center>\n<div class=\"row\">\n<div class=\"col-sm-4\">\n <strong>Information</strong>\n      <div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n  <img src=\"{{image}}\" alt=\"\" class=\"img-responsive\" height=\"42\" width=\"42\"> <strong>{{owner}}</strong>\n      <div> <img src=\"app/images/fork.png\"  height=\"17\" width=\"20\" >:  {{forks}} </div>\n     <div> <img src=\"app/images/eye.jpg\"  height=\"17\" width=\"20\" >: {{watcher}} </div>\n      <div> <img src=\"app/images/language.png\"  height=\"17\" width=\"20\" >: {{language}} </div>\n      <div>  <img src=\"app/images/pen.jpg\"  height=\"17\" width=\"20\" >: {{subscribers}} </div>\n  \n  </div>\n</div>\n    <strong>  <a [routerLink]=\" ['Home'] \">Back</a> </strong>\n  </div>\n\n\n  <div class=\"col-sm-4\">\n  <strong>Contributors</strong>\n    <ul  class=\"list-unstyled\">\n <li *ngFor=\" let contributor of contributors\">\n    <div class=\"panel panel-default\">\n  <div class=\"panel-body\"> \n \n\n   <center> <img src=\"{{contributor.avatar_url}}\" alt=\"\" class=\"img-responsive\" height=\"42\" width=\"42\">\n      <a href=\"#\" title=\"{{ contributor.url }} \"   data-toggle=\"popover\" data-trigger=\"hover\" >{{ contributor.login }}</a> </center>\n       \n       \n     \n     </div>\n</div>\n</li>\n    \n   </ul>\n  </div>\n  <div class=\"col-sm-4\">\n     <strong>Issues</strong>\n    <ul class=\"list-unstyled\">\n     <li *ngFor=\" let issue of issues\">\n      <div class=\"panel panel-default\">\n  <div class=\"panel-body\"> \n      <a href=\"#\" title=\"issue id: {{ issue.id }} \"   data-toggle=\"popover\" data-trigger=\"hover\" >{{ issue.user.login }}</a>  - {{issue.title}} \n         </div>\n</div>\n     </li>\n   </ul>\n  </div>\n</div>\n</div>\n   \n\n   ",
                        providers: [repodetail_service_1.DetailsService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [repodetail_service_1.DetailsService, router_1.RouteParams, http_1.Http])
                ], RepoDetails);
                return RepoDetails;
            }());
            exports_1("RepoDetails", RepoDetails);
        }
    }
});
//# sourceMappingURL=RepoDetails.js.map