import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({
  selector: 'DodajKnjigu',
  templateUrl: 'app/dodajknjigu/dodajknjigu.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class DodajKnjiguComponent {

  addForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
   select: Int = 1;

  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
    this.addForm = builder.group({
     zanr_id: [this.select, Validators.none],
     naziv_knjige: ["", Validators.none],
     autor: ["", Validators.none],
	 opis: ["", Validators.none],
	 cena: ["", Validators.none],

   });
   var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');

   	http.get('http://localhost/phpKnjige/getzanr.php',{headers:headers})
		.map(res => res.json()).share()
		.subscribe(zanrovi => {
			this.zanrovi = zanrovi.zanrovi;
		},
		err => {
			 this.router.parent.navigate(['./Pocetna']);
		}
	);
  }

  onAdd(): void {
	var data = "naziv_knjige="+this.addForm.value.naziv_knjige+"&autor="+this.addForm.value.autor + "&opis="+this.addForm.value.opis +"&zanr_id=" + this.select +"&cena="+this.addForm.value.cena;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');

	this.http.post('http://localhost/phpKnjige/addservisservice.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err => {
		var obj = JSON.parse(err._body);
		document.getElementsByClassName("alert")[0].style.display = "block";
		document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
	},
	() => {
	    this.router.parent.navigate(['./Pocetna']);
	 }
	);
  }
}
