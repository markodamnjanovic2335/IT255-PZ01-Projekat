import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS , Headers} from 'angular2/http';
import {Router} from 'angular2/router';
import 'rxjs/Rx';
import {FORM_DIRECTIVES , FORM_BINDINGS} from 'angular2/common';



@Component({

 selector: 'KomentariPage',
 templateUrl: 'app/komentari/komentari.html',


})


export class KomentariComponent {

  http: Http;
 router: Router;


 komentari: Object[];
  constructor( http: Http, router: Router) {
 this.http = http;
 this.router = router;
 var headers = new Headers();

 http.get('http://localhost/phpKnjige/getKomentari.php',{headers:headers})
 .map(res => res.json())
 .subscribe(komentari => {this.komentari = komentari.komentari;
 });

}
}
