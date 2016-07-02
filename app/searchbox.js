System.register(['angular2/core', './github.service', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, core_2, github_service_1, Observable_1;
    var SearchBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            SearchBox = (function () {
                function SearchBox(github, el) {
                    this.github = github;
                    this.el = el;
                    this.results = new core_2.EventEmitter();
                }
                SearchBox.prototype.ngOnInit = function () {
                    var _this = this;
                    // convert the `keyup` event into an observable stream
                    Observable_1.Observable.fromEvent(this.el.nativeElement, 'keyup')
                        .map(function (e) { return e.target.value; }) // extract the value of the input
                        .filter(function (text) { return text.length > 1; }) // filter out if empty
                        .debounceTime(250) // only once every 250ms
                        .map(function (query) { return _this.github.getGithub(query); })
                        .switch()
                        .subscribe(function (results) {
                        _this.results.next(results);
                    }, function (err) {
                        console.log(err);
                    }, function () {
                    });
                };
                SearchBox = __decorate([
                    core_1.Component({
                        outputs: ['results'],
                        selector: 'search-box',
                        template: "\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>\n  "
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService, core_2.ElementRef])
                ], SearchBox);
                return SearchBox;
            }());
            exports_1("SearchBox", SearchBox);
        }
    }
});
//# sourceMappingURL=searchbox.js.map