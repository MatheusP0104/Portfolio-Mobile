import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';







@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.page.html',
  styleUrls: ['./tela-principal.page.scss'],
})
export class TelaPrincipalPage implements OnInit {
  userEmail: string
  isLoggedIn:boolean
  private userDataKey = 'user_data';
  UserData: any
 

  constructor(
    private menuController: MenuController, 
    private afAuth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore
  ) {}

 async ngOnInit() {
  const uid = (await this.afAuth.currentUser).uid;
  const userDoc = await this.firestore.collection('Admin').doc(uid).get().toPromise();
   this.UserData = userDoc.data();
   
   this.userEmail = this.UserData.nome
  }

  onClick() {
    this.menuController.close();
  }

  logout(){
    localStorage.removeItem(this.userDataKey)
    this.router.navigateByUrl('/tela-login')
  }



}
