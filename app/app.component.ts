import {Component} from 'angular2/core';
import {RouteConfig,Router, ROUTER_DIRECTIVES} from 'angular2/router';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ObiblioteciComponent } from './obiblioteci/obiblioteci.component';
import {RegisterComponent} from './registrovanje/register.component';
import {LoginComponent} from './logovanje/log.component';
import {TestComponent} from './test/test.component';
import {PricaonicaComponent} from './pricaonica/pricaonica.component';
import {DodajKnjiguComponent} from './dodajknjigu/dodajknjigu.component';
import {KnjigeComponent} from './knjige/knjige.component';
import {Pipe} from 'angular2/core';
import {NarucvivanjeComponent} from './narucivanje/narucivanje.component';
import {NarudzbineComponent} from './narudzbine/narudzbine.component';

@Component({
 selector: 'online-knjige',
templateUrl: 'app/router.html',
directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
 {path:'/', name: 'Pocetna', component: PocetnaComponent, useAsDefault: true},
 {path:'/obiblioteci', name:'Obiblioteci', component: ObiblioteciComponent},
 {path:'/registrovanje', name:'RegisterPage', component: RegisterComponent},
 {path:'/logovanje', name:'LoginPage', component: LoginComponent},
 {path:'/test', name:'TestPage', component: TestComponent},
 {path:'/pricaonica', name:'Pricaonica', component: PricaonicaComponent},

 {path:'/dodajknjigu', name:'DodajKnjigu', component: DodajKnjiguComponent},
 {path:'/knjige', name:'Knjige', component: KnjigeComponent},
{path:'/narucivanje/:knjige_ID', name: 'NarucivanjePage', component: NarucvivanjeComponent},
{path:'/narudzbine', name: 'NarudzbinePage', component: NarudzbineComponent},
])


export class AppComponent {

  router: Router;
  isAuth: String;
  isAuth2: String;

  constructor(router: Router) {
  this.router = router;
   router.subscribe((val) => {

   if(localStorage.getItem('token2') !== null){
    this.isAuth2 = "yes";
     }
      if(localStorage.getItem('token2') == null){
     this.isAuth2 = "no";
      }
      if(localStorage.getItem('token') !== null){
       this.isAuth = "yes";
        }
         if(localStorage.getItem('token') == null){
        this.isAuth = "no";
         }
   });
  }
  onLogout(): void {

  localStorage.removeItem("token2");
  localStorage.removeItem("token");
  this.router.navigate(['./Pocetna']);

  if(localStorage.getItem('token') !== null){
  		this.isAuth = "yes";
  	}
    if(localStorage.getItem('token') == null){
    		this.isAuth = "no";
    	}
   if(localStorage.getItem('token2') !== null){
     this.isAuth2 = "yes";
  	}
    if(localStorage.getItem('token2') == null){
     this.isAuth2 = "no";
  }
}
}
