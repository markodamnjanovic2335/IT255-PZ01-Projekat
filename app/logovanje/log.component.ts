import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES,
FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';


@Component({
 selector: 'LoginPage',
 templateUrl: 'app/logovanje/log.html',
 directives: [FORM_DIRECTIVES],
 viewBindings: [FORM_BINDINGS]
})

export class LoginComponent {

  loginForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;


  constructor(builder: FormBuilder, http: Http, router: Router ) {
 this.http = http;
 this.router = router;
  this.loginForm = builder.group({
  username: ["", Validators.none],
  password: ["", Validators.none],
  checkbox: ["",Validators.none],
  });



  }
  onLogin(): void {
 var data =
 "username="+this.loginForm.value.username+"&password="+this.loginForm.value.password;
 var headers = new Headers();
 headers.append('Content-Type', 'application/x-www-form-urlencoded');

 if (this.loginForm.value.checkbox !== true ) {
 this.http.post('http://localhost/phpKnjige/loginservice.php',data, {headers:headers})
  .map(res => res)
  .subscribe( data => this.postResponse = data,
 err => alert(JSON.stringify(err)),
 () => {
 if(this.postResponse._body.indexOf("error") === -1){
 var obj = JSON.parse(this.postResponse._body);
 localStorage.setItem('token', obj.token);
  this.router.parent.navigate(['./Pocetna']);
 }else{
 var obj = JSON.parse(this.postResponse._body);
 document.getElementsByClassName("alert")[0].style.display = "block";
 document.getElementsByClassName("alert")[0].innerHTML =
 obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
 }
 }
 );
  }
else {

  this.http.post('http://localhost/phpKnjige/loginserviceadmin.php',data, {headers:headers})
   .map(res => res)
   .subscribe( data => this.postResponse = data,
  err => alert(JSON.stringify(err)),
  () => {
  if(this.postResponse._body.indexOf("error") === -1){
  var obj = JSON.parse(this.postResponse._body);
  localStorage.setItem('token2', obj.token2);
   this.router.parent.navigate(['./Pocetna']);
  }else{
  var obj = JSON.parse(this.postResponse._body);
  document.getElementsByClassName("alert")[0].style.display = "block";
  document.getElementsByClassName("alert")[0].innerHTML =
  obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
  }
  }
  );
   }

}


}
