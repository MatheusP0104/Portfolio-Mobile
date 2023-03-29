import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'


@Component({
  selector: 'app-tela-perfil',
  templateUrl: './tela-perfil.page.html',
  styleUrls: ['./tela-perfil.page.scss'],
})
export class TelaPerfilPage implements OnInit {
  userEmail:string
  icone: string = 'create-outline'
  tipo : string
  public editMode = false

  constructor(private afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(user =>{
      if(user){
        this.userEmail = user.email
      }
    })
    
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

  ngOnInit() {}


}
