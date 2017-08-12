System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, router_1;
    var NarucvivanjeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NarucvivanjeComponent = (function () {
                function NarucvivanjeComponent(builder, http, router, params) {
                    var _this = this;
                    this.itemId = +params.get('knjige_ID');
                    this.token = localStorage.getItem('token');
                    this.http = http;
                    this.router = router;
                    this.narucivanjeForm = builder.group({
                        naziv_zanr: ["", common_1.Validators.none],
                        naziv_knjige: ["", common_1.Validators.none],
                        opis: ["", common_1.Validators.none],
                        cena: ["", common_1.Validators.none],
                        username: ["", common_1.Validators.none],
                    });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.get('http://localhost/phpKnjige/getKnjigeById.php?knjige_ID=' + this.itemId, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.narucivanjeForm.controls['naziv_zanr'].updateValue(data.knjige.naziv_zanr);
                        _this.narucivanjeForm.controls['naziv_knjige'].updateValue(data.knjige.naziv_knjige);
                        _this.narucivanjeForm.controls['opis'].updateValue(data.knjige.opis);
                        _this.narucivanjeForm.controls['cena'].updateValue(data.knjige.cena);
                    }, function (err) { return console.log(JSON.stringify(err)); });
                    this.http.get('http://localhost/phpKnjige/getUserByToken.php?token=' + this.token, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.narucivanjeForm.controls['username'].updateValue(data.username.username);
                    }, function (err) { return console.log(JSON.stringify(err)); });
                }
                NarucvivanjeComponent.prototype.send = function () {
                    var _this = this;
                    var data = "username=" + this.narucivanjeForm.value.username
                        + "&naziv_zanr=" + this.narucivanjeForm.value.naziv_zanr + "&naziv_knjige=" + this.narucivanjeForm.value.naziv_knjige
                        + "&opis=" + this.narucivanjeForm.value.opis + "&cena=" + this.narucivanjeForm.value.cena;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/phpKnjige/narudzbina.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) {
                        var obj = JSON.parse(err._body);
                        document.getElementsByClassName("alert")[0].style.display = "block";
                        document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
                    }, function () {
                        _this.router.parent.navigate(['./Knjige']);
                        alert("Čestitamo na kupovini");
                    });
                };
                NarucvivanjeComponent = __decorate([
                    core_1.Component({
                        selector: 'NarucivanjePage',
                        templateUrl: 'app/narucivanje/narucivanje.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router, router_1.RouteParams])
                ], NarucvivanjeComponent);
                return NarucvivanjeComponent;
            }());
            exports_1("NarucvivanjeComponent", NarucvivanjeComponent);
        }
    }
});
//# sourceMappingURL=narucivanje.component.js.map