import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})
export class TelaLoginPage implements OnInit {
  

  constructor(
    public authService: AuthServiceService,
    public router: Router
  ) { }

  ngOnInit() {}

  logIn(email, senha){
    this.authService.SignIn(email.value, senha.value).then((res) =>{
      if(this.authService.isEmailVerified){
        this.router.navigate(['/tela-principal'])
      }else{
        console.log('Erro')
        return false
      }
    }).catch((error) =>{
      console.log(error)
    })

  }

}
