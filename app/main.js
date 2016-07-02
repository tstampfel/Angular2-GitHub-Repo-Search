System.register(['angular2/platform/browser', './main-route', 'angular2/http', 'angular2/router', 'angular2/platform/common', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, main_route_1, http_1, router_1, common_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_route_1_1) {
                main_route_1 = main_route_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(main_route_1.MainRoute, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })
            ]);
        }
    }
});
//bootstrap(AppComponent, [HTTP_PROVIDERS]); 
//# sourceMappingURL=main.js.map