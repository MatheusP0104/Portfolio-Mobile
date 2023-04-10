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
  senha: any
  mensagem: string
  saida : string
  
  

  constructor(
    public router: Router,
    private auth: AngularFireAuth,
    private alert : AlertController
    ) { }

   

  ngOnInit() { }
  
  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Verificar Email',
      subHeader: this.mensagem,
      message: this.saida,
      buttons: ['Voltar'],
    });

    await alert.present();
  }

  login() { 

    this.email = ((document.getElementById("email") as HTMLInputElement).value )
    this.senha = ((document.getElementById("senha") as HTMLInputElement).value )

   
    this.auth.signInWithEmailAndPassword(this.email, this.senha).then(userCredential => {

    // Signed up
      if (userCredential.user) {
        this.router.navigateByUrl('/tela-principal')
        // if (userCredential.user.emailVerified) {
        //   
        // } else {
        //   this.mensagem = 'Verifique seu Email!'
        //   this.saida = 'Por Favor verifique seu email para continuar'
        //   this.presentAlert()
        // }
    }
  })
  .catch((error) => {
    // this.mensagem = 'Email ou Senha Inválidos!'
    // this.saida = 'Por Favor verifique se os campos foram preenchidos corretamente.'
    // this.presentAlert()
  });
  }

  


}
