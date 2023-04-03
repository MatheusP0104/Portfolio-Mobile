import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';







@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.page.html',
  styleUrls: ['./create-todo.page.scss'],
})
export class CreateTodoPage implements OnInit {
  password: string = '';
  showPassword: boolean = false;
  public user: any = {}
 
  constructor(
    private auth: AngularFireAuth,
    private router : Router,
    private alertController: AlertController,
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


 async Cadastrar(){
   try {
    const newUser = await this.auth.createUserWithEmailAndPassword(this.user.email, this.user.senha)
     await this.angular.collection('Users').doc(newUser.user.uid).set(this.user)
     if (this.user) {
      newUser.user.sendEmailVerification()
      this.presentAlert()
      this.router.navigateByUrl('/tela-login')
     }
     
   } catch (error) {
     console.log(error)
    }
    
    
    // Signed in
      
   
  }
  

  ngOnInit() {}

}
