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
    private alertController: AlertController
    ) { }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Bem-Vindo',
        subHeader: 'Falta pouco para concluir seu Cadastro',
        message: 'Por Favor insira um nome de usuário e um número de telefone válido',
        buttons: [
          {
            text:'Mais Tarde'
        },

         {
          text:'Ir para o Perfil',
          handler: () => {
            this.router.navigateByUrl('/tela-perfil')
          }
         } 
      ],
      });
  
      await alert.present();
    }

  ngOnInit() {}

  login() { 

    this.email = ((document.getElementById("email") as HTMLInputElement).value )
    this.senha = ((document.getElementById("senha") as HTMLInputElement).value )

   
    this.auth.signInWithEmailAndPassword(this.email, this.senha).then(userCredential => {

    // Signed up
    if (userCredential.user) {
      this.router.navigateByUrl('/tela-principal')
      this.presentAlert()
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert(errorMessage)
  });
  }

  

}
