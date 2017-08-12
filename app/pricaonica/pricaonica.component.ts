import { Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'
import{Component} from "angular2/core";
import{KomentariComponent} from '../komentari/komentari.component';


@Component({

 selector: 'Pricaonica',
 templateUrl: 'app/pricaonica/pricaonica.html',
directives: [FORM_DIRECTIVES ,KomentariComponent],
viewBindings: [FORM_BINDINGS]
})


export class PricaonicaComponent {

  komentarForm: ControlGroup;
    http: Http;
    router: Router;
    postResponse: String;
    token: String;
    token2: String;

     username: Object[];



    constructor(builder: FormBuilder, http: Http,  router: Router) {
    this.http = http;
    this.router = router;
    this.token = localStorage.getItem('token');
    this.token2 = localStorage.getItem('token2');
      this.komentarForm = builder.group({
       komentar: ["", Validators.none],
       username: ["", Validators.none],
     });
     var headers = new Headers();
     headers.append('Content-Type', 'application/x-www-form-urlencoded');
     if (localStorage.getItem('token')) {
     http.get('http://localhost/phpKnjige/getUserByToken.php?token=' + this.token , {headers:headers})
     .map(res => res.json())
     .subscribe(username => {
            (<Control>this.komentarForm.controls['username']).updateValue(username.username.username);

          },
          err => console.log(JSON.stringify(err)))

    }
    else {

      http.get('http://localhost/phpKnjige/getAdminByToken.php?token2=' + this.token2 , {headers:headers})
      .map(res => res.json())
      .subscribe(username => {
             (<Control>this.komentarForm.controls['username']).updateValue(username.username.username);

           },
           err => console.log(JSON.stringify(err)))


    }

}
    onAddComment(): void {

          var data =
              "komentar="+this.komentarForm.value.komentar + "&user="+this.komentarForm.value.username;
          var headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');

          this.http.post('http://localhost/phpKnjige/dodajKomentar.php',data, {headers:headers})
              .map(res => res)
              .subscribe( data => this.postResponse = data,
                  err => alert(JSON.stringify(err)),
                  () => {
                    if(this.postResponse._body.indexOf("error") === -1){
                        alert("Uspešno ste ostavili komentar");
                        this.router.parent.navigate(['./Pocetna']);
                    }else{
                        alert("Dogodila se greška");
                    }
                  }
              );

      }

}
