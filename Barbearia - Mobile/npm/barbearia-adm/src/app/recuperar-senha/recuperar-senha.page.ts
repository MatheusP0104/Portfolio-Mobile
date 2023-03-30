import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {
  email: any
  mensagem: string
  saida: string

  constructor(private afAuth: AngularFireAuth, private alertController: AlertController, public router: Router,) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Recuperar Senha',
      subHeader: this.mensagem,
      message: this.saida,
      buttons: [
       {
        text:'Ok',
        handler: () => {
          
        }
       } 
    ],
    });

    await alert.present();
  }

  ngOnInit() {
  }

  recuperarSenha() {
    this.email = ((document.getElementById("email") as HTMLInputElement).value)

    this.afAuth.sendPasswordResetEmail(this.email)
      .then(() => {
        this.mensagem = 'Email Enviado com Sucesso!'
        this.saida = ('Enviamos um link de recuperação para esse email: ' + this.email)
        this.presentAlert()
       
      })
      .catch(() => {
        this.mensagem = 'Email Inválido'
        this.saida = 'Não Encontramos este Endereço de email, Por Favor verifique se está correto'
      });
  }

}
