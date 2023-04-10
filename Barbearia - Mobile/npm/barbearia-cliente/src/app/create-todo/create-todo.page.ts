import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';







@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.page.html',
  styleUrls: ['./create-todo.page.scss'],
})
export class CreateTodoPage implements OnInit {
  password: string = '';
  showPassword: boolean = false;
  mensagem: string
  saida: string
  public user: any = {}
 
  constructor(
    private auth: AngularFireAuth,
    private router : Router,
    private alertController: AlertController,
    private alertErro: AlertController,
    private angular: AngularFirestore
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Verificar Email',
      subHeader: 'Olá,' + this.user.email,
      message: 'Enviamos um Email de Verificação para você',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  async presentAlertError() {
    const alert = await this.alertErro.create({
      header: 'Algo deu Errado!',
      subHeader: this.mensagem,
      message: this.saida,
      buttons: ['Ok'],
    });

    await alert.present();
  }


 async Cadastrar(){
   try {
    const newUser = await this.auth.createUserWithEmailAndPassword(this.user.email, this.user.senha)
     await this.angular.collection('Users').doc(newUser.user.uid).set(this.user)
     if (this.user) {
       newUser.user.sendEmailVerification()
       this.router.navigateByUrl('/tela-login')
       this.presentAlert()
     }
     
   } catch (error) {
    this.mensagem = 'Preencha todos os campos corretamente'
    this.saida = 'Verifique se você não esqueceu de nada'
    this.presentAlertError()
    }
    
    
    // Signed in
      
   
  }
  

  ngOnInit() {}

}
