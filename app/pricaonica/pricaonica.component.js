System.register(['angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router', "angular2/core", '../komentari/komentari.component'], function(exports_1, context_1) {
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
    var common_1, http_1, router_1, core_1, komentari_component_1;
    var PricaonicaComponent;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (komentari_component_1_1) {
                komentari_component_1 = komentari_component_1_1;
            }],
        execute: function() {
            PricaonicaComponent = (function () {
                function PricaonicaComponent(builder, http, router) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.token = localStorage.getItem('token');
                    this.token2 = localStorage.getItem('token2');
                    this.komentarForm = builder.group({
                        komentar: ["", common_1.Validators.none],
                        username: ["", common_1.Validators.none],
                    });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    if (localStorage.getItem('token')) {
                        http.get('http://localhost/phpKnjige/getUserByToken.php?token=' + this.token, { headers: headers })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (username) {
                            _this.komentarForm.controls['username'].updateValue(username.username.username);
                        }, function (err) { return console.log(JSON.stringify(err)); });
                    }
                    else {
                        http.get('http://localhost/phpKnjige/getAdminByToken.php?token2=' + this.token2, { headers: headers })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (username) {
                            _this.komentarForm.controls['username'].updateValue(username.username.username);
                        }, function (err) { return console.log(JSON.stringify(err)); });
                    }
                }
                PricaonicaComponent.prototype.onAddComment = function () {
                    var _this = this;
                    var data = "komentar=" + this.komentarForm.value.komentar + "&user=" + this.komentarForm.value.username;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/phpKnjige/dodajKomentar.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            alert("Uspešno ste ostavili komentar");
                            _this.router.parent.navigate(['./Pocetna']);
                        }
                        else {
                            alert("Dogodila se greška");
                        }
                    });
                };
                PricaonicaComponent = __decorate([
                    core_1.Component({
                        selector: 'Pricaonica',
                        templateUrl: 'app/pricaonica/pricaonica.html',
                        directives: [common_1.FORM_DIRECTIVES, komentari_component_1.KomentariComponent],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], PricaonicaComponent);
                return PricaonicaComponent;
            }());
            exports_1("PricaonicaComponent", PricaonicaComponent);
        }
    }
});
//# sourceMappingURL=pricaonica.component.js.map