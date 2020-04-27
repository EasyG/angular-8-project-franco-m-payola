import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logIn(username: string, password: string, event: Event) {
 
    if (username!='test' || password!='Ayi+2020'){
     alert('Usuario incorrecto');
     
    }else{
     this.router.navigate(['/home']); 
     
   }
    
 }

}
