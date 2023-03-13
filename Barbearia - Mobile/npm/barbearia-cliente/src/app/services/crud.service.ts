import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Agendamento } from '../models/agendamento';
import { Servicos } from '../models/servicos';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firebase: AngularFirestore, private route: Router) { }
  
  // Cria a tabela Users no firebase
  createUser(user: Users) {
    return this.firebase.collection('Users').add(user);
  }


  // Cria a tabela Agendamento no firebase
  createAgenda(agenda: Agendamento) {
    return this.firebase.collection('Agendamento').add(agenda);
  }

 
//  Lista todos os dados que estão na tabela Users
  getUser() {
    return this.firebase.collection('Users').snapshotChanges();
  }

  //  Lista todos os dados que estão na tabela Serviços
  getServico() {
    return this.firebase.collection('Servicos').snapshotChanges();
  }

 
  getIdUsers(id) {
    return this.firebase.collection('Admin').doc(String(id)).valueChanges();
  }

  updateServico(id, servico : Servicos) {
    this.firebase.collection('Servicos').doc(id).update(servico).then(() => {
      this.route.navigate(['/tela-cabelo']);
    }).catch((err) => console.log(err))
  }

  updateAdmin(id, admin : Users) {
    this.firebase.collection('Admin').doc(id).update(admin).then(() => {}).catch((err) => console.log(err))
  }

  deleteServico(id: string) {
    this.firebase.doc('Servicos/' + id).delete();
  }

  deleteAdmin(id: string) {
    this.firebase.doc('Admin/' + id).delete();
  }
}
