System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1;
    var KomentariComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            KomentariComponent = (function () {
                function KomentariComponent(http, router) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    var headers = new http_1.Headers();
                    http.get('http://localhost/phpKnjige/getKomentari.php', { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (komentari) {
                        _this.komentari = komentari.komentari;
                    });
                }
                KomentariComponent = __decorate([
                    core_1.Component({
                        selector: 'KomentariPage',
                        templateUrl: 'app/komentari/komentari.html',
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], KomentariComponent);
                return KomentariComponent;
            }());
            exports_1("KomentariComponent", KomentariComponent);
        }
    }
});
//# sourceMappingURL=komentari.component.js.map