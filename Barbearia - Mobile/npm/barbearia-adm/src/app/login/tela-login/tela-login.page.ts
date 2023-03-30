import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})
export class TelaLoginPage implements OnInit {
  password: string = '';
  showPassword: boolean = false;
  email: any
  senha : any
  
  

  constructor(
    public router: Router,
    private auth: AngularFireAuth,
    ) { }

   

  ngOnInit() {}

  login() { 

    this.email = ((document.getElementById("email") as HTMLInputElement).value )
    this.senha = ((document.getElementById("senha") as HTMLInputElement).value )

   
    this.auth.signInWithEmailAndPassword(this.email, this.senha).then(userCredential => {

    // Signed up
    if (userCredential.user) {
      this.router.navigateByUrl('/tela-principal')
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert(errorMessage)
  });
  }

  


}
