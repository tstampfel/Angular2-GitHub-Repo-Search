System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Github;
    return {
        setters:[],
        execute: function() {
            Github = (function () {
                function Github(obj) {
                    this.name = obj && obj.name || null;
                    this.owner = obj && obj.owner || null;
                    this.fullname = obj && obj.fullname || null;
                    this.forks = obj && obj.forks;
                    this.watchers = obj && obj.watchers;
                    this.language = obj && obj.language || null;
                    this.subscribers = obj && obj.subscribers || null;
                    this.updated = obj && obj.updated || null;
                    this.contributorsUrl = obj && obj.contributorsUrl || null;
                    this.avatar = obj && obj.avatar || null;
                }
                return Github;
            }());
            exports_1("Github", Github);
        }
    }
});
//# sourceMappingURL=github.js.map