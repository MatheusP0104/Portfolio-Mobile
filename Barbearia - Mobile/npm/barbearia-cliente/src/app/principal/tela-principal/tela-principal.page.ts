import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth'


@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.page.html',
  styleUrls: ['./tela-principal.page.scss'],
})
export class TelaPrincipalPage implements OnInit {
  userEmail: string
 

  constructor(
    private menuController: MenuController, 
    private afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(user =>{
        if(user){
          this.userEmail = user.email
        }
      })
     }

  ngOnInit() {
   
  }

  onClick() {
    this.menuController.close();
  }

}
