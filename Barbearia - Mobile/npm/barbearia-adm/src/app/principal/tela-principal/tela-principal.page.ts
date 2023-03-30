import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';




@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.page.html',
  styleUrls: ['./tela-principal.page.scss'],
})
export class TelaPrincipalPage implements OnInit {
  userEmail: string
  isLoggedIn:boolean
  private userDataKey = 'user_data';
 

  constructor(
    private menuController: MenuController, 
    private afAuth: AngularFireAuth,
    private router: Router) {
      this.afAuth.authState.subscribe(user =>{
        if(user){
          this.userEmail = user.displayName
        }
      })
     }

  ngOnInit() {
   
  }

  onClick() {
    this.menuController.close();
  }

  logout(){
    localStorage.removeItem(this.userDataKey)
    this.router.navigateByUrl('/tela-login')
  }



}
