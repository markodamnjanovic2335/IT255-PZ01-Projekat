System.register(['angular2/core', 'angular2/router', './pocetna/pocetna.component', './obiblioteci/obiblioteci.component', './registrovanje/register.component', './logovanje/log.component', './test/test.component', './pricaonica/pricaonica.component', './dodajknjigu/dodajknjigu.component', './knjige/knjige.component', './narucivanje/narucivanje.component', './narudzbine/narudzbine.component'], function(exports_1, context_1) {
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
    var core_1, router_1, pocetna_component_1, obiblioteci_component_1, register_component_1, log_component_1, test_component_1, pricaonica_component_1, dodajknjigu_component_1, knjige_component_1, narucivanje_component_1, narudzbine_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pocetna_component_1_1) {
                pocetna_component_1 = pocetna_component_1_1;
            },
            function (obiblioteci_component_1_1) {
                obiblioteci_component_1 = obiblioteci_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (log_component_1_1) {
                log_component_1 = log_component_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            },
            function (pricaonica_component_1_1) {
                pricaonica_component_1 = pricaonica_component_1_1;
            },
            function (dodajknjigu_component_1_1) {
                dodajknjigu_component_1 = dodajknjigu_component_1_1;
            },
            function (knjige_component_1_1) {
                knjige_component_1 = knjige_component_1_1;
            },
            function (narucivanje_component_1_1) {
                narucivanje_component_1 = narucivanje_component_1_1;
            },
            function (narudzbine_component_1_1) {
                narudzbine_component_1 = narudzbine_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    var _this = this;
                    this.router = router;
                    router.subscribe(function (val) {
                        if (localStorage.getItem('token2') !== null) {
                            _this.isAuth2 = "yes";
                        }
                        if (localStorage.getItem('token2') == null) {
                            _this.isAuth2 = "no";
                        }
                        if (localStorage.getItem('token') !== null) {
                            _this.isAuth = "yes";
                        }
                        if (localStorage.getItem('token') == null) {
                            _this.isAuth = "no";
                        }
                    });
                }
                AppComponent.prototype.onLogout = function () {
                    localStorage.removeItem("token2");
                    localStorage.removeItem("token");
                    this.router.navigate(['./Pocetna']);
                    if (localStorage.getItem('token') !== null) {
                        this.isAuth = "yes";
                    }
                    if (localStorage.getItem('token') == null) {
                        this.isAuth = "no";
                    }
                    if (localStorage.getItem('token2') !== null) {
                        this.isAuth2 = "yes";
                    }
                    if (localStorage.getItem('token2') == null) {
                        this.isAuth2 = "no";
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'online-knjige',
                        templateUrl: 'app/router.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Pocetna', component: pocetna_component_1.PocetnaComponent, useAsDefault: true },
                        { path: '/obiblioteci', name: 'Obiblioteci', component: obiblioteci_component_1.ObiblioteciComponent },
                        { path: '/registrovanje', name: 'RegisterPage', component: register_component_1.RegisterComponent },
                        { path: '/logovanje', name: 'LoginPage', component: log_component_1.LoginComponent },
                        { path: '/test', name: 'TestPage', component: test_component_1.TestComponent },
                        { path: '/pricaonica', name: 'Pricaonica', component: pricaonica_component_1.PricaonicaComponent },
                        { path: '/dodajknjigu', name: 'DodajKnjigu', component: dodajknjigu_component_1.DodajKnjiguComponent },
                        { path: '/knjige', name: 'Knjige', component: knjige_component_1.KnjigeComponent },
                        { path: '/narucivanje/:knjige_ID', name: 'NarucivanjePage', component: narucivanje_component_1.NarucvivanjeComponent },
                        { path: '/narudzbine', name: 'NarudzbinePage', component: narudzbine_component_1.NarudzbineComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map