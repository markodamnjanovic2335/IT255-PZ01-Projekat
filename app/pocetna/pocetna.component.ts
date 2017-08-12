import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


@Component({

  selector: 'Pocetna',
  templateUrl: 'app/pocetna/pocetna.html',
  directives: [ROUTER_DIRECTIVES] ,
  styleUrls: ['app/pocetna/css/bootstrap.css' , 'app/pocetna/css/bootstrap.min.css',
    'app/pocetna/css/one-page-wonder.css'],
})



export class PocetnaComponent {

}
