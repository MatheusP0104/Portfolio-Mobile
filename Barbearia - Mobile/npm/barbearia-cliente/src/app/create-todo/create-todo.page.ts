import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';





@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.page.html',
  styleUrls: ['./create-todo.page.scss'],
})
export class CreateTodoPage implements OnInit {
  password: string = '';
  showPassword: boolean = false;
  email: any
  senha : any
  nome: any
  tel: any
  phoneProvider: any
 
  constructor(
    private auth: AngularFireAuth,
    private router : Router,
    private alertController: AlertController,
    private navController: NavController
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Verificar Email',
      subHeader: 'Olá',
      message: 'Enviamos um Email de Verificação para você',
      buttons: ['Voltar'],
    });

    await alert.present();
  }


  Cadastrar(){
    this.email = ((document.getElementById("email") as HTMLInputElement).value )
    this.senha = ((document.getElementById("senha") as HTMLInputElement).value )
    this.nome = ((document.getElementById("nome") as HTMLInputElement).value )
    this.tel = ((document.getElementById("tel") as HTMLInputElement).value )
    
    
    this.auth.createUserWithEmailAndPassword(this.email, this.senha).then(userCredential => {
      userCredential.user.updateProfile({displayName: this.nome})
    // Signed in
    if (userCredential.user) {
      userCredential.user.sendEmailVerification()
      this.presentAlert()
      this.router.navigateByUrl('/tela-login')
    } else {
      window.alert("Não foi possivel criar sua conta")
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert(errorMessage)
  });
  }

  ngOnInit() {}

}
