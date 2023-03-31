import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';




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
  UserData: any
  public editMode = false
  public editedName: string;
  public editedEmail: string;
  public editedSenha: string;
  public editedTel: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private alertController: AlertController,
    private firestore: AngularFirestore
    ) {}
    
    async ngOnInit() {
      const uid = (await this.afAuth.currentUser).uid;
      const userDoc = await this.firestore.collection('Admin').doc(uid).get().toPromise();
       this.UserData = userDoc.data();
       
       this.userName = this.UserData.nome
       this.userEmail = this.UserData.email
       this.userSenha = this.UserData.senha
       this.userTel = this.UserData.tel
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
        if (this.icone === 'checkbox-outline')
        this.UpdateUser()
        this.editMode = false;
        this.tipo = 'submit'
        this.icone = 'create-outline'
        break;
    }
  }

  async UpdateUser() {
    const uid = (await this.afAuth.currentUser).uid;
    try {
      await this.firestore.collection('Admin').doc(uid).update({
        nome: this.userName,
        email: this.userEmail,
        senha: this.userSenha,
        tel: this.userTel
      });
      this.editMode = false;
      this.icone = 'create-outline';
    } catch (error) {
      console.error(error);
    }
  }
}

