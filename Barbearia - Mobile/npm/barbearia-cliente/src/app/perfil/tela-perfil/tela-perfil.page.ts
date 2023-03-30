import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-tela-perfil',
  templateUrl: './tela-perfil.page.html',
  styleUrls: ['./tela-perfil.page.scss'],
})
export class TelaPerfilPage implements OnInit {
  userEmail:string
  userName:string
  userSenha:string
  userTel: any
  icone: string = 'create-outline'
  tipo : string
  public editMode = false

  constructor(private afAuth: AngularFireAuth, private router: Router, private alertController: AlertController, private route: ActivatedRoute) { 
    this.afAuth.authState.subscribe(user =>{
      if(user){
        this.userEmail = user.email
        this.userName = user.displayName
      }
    })
  }

  async deleteAccount(): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (user) {
      this.presentAlert()
      await user.delete();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Excluir Conta',
      subHeader: 'Você está prestes a exluir sua conta, tem certeza?',
      buttons: [{
        text:'Não'
      },
      {
        text:'Sim',
        handler: () => {
          this.router.navigateByUrl('/home')
        }
      }
      
    ],
    });

    await alert.present();
  }

 


  edit(){
    switch (this.editMode){
      case false:
        if(this.icone === 'create-outline'){
        this.editMode = true;
        this.icone = 'checkbox-outline'
        break;
        }
      case true:
        if(this.icone === 'checkbox-outline')
          this.editMode = false;
        this.tipo = 'submit'
        this.icone = 'create-outline'
        break;
    }
  }

  ngOnInit() {
    
  }


}
