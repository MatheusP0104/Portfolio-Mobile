import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';





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
 
  constructor(
    private auth: AngularFireAuth,
    private router : Router,
    private alertController: AlertController
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

   
    this.auth.createUserWithEmailAndPassword(this.email, this.senha).then(userCredential => {

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

  ngOnInit() {
    // this.userForm = this.formBuilder.group({
    //   nome: ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern('[a-zA-Z]*')])],
    //     email: ['',Validators.compose([Validators.required,Validators.email])],
    //     telefone: ['',Validators.compose([Validators.required, Validators.minLength(14)])],
    //     senha: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])]
    // })
  }

  

  // onSubmit() {
  //   switch (this.editMode){
  //     case false:
  //     this.editMode = true
  //     break
    
  //     case true:
  //       this.editMode = false
  //       break
  //     }
  //   if (!this.userForm.valid) {
  //     this.presentAlert()
  //   } else {
  //     this.service.createUser(this.userForm.value).then(() => {
  //       this.userForm.reset();
  //       this.route.navigate(['/tela-principal'])
  //     }).catch((err) => console.log(err))
  //   }
  // }

}
