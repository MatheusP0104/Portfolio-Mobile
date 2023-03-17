import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Agendamento } from '../models/agendamento';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firebase: AngularFirestore) { }

  // === Criar ===

  // Cria a tabela Users no firebase
  createUser(user: Users) {
    return this.firebase.collection('Users').add(user);
  }


  // Cria a tabela Agendamento no firebase
  createAgenda(agenda: Agendamento) {
    return this.firebase.collection('Agendamento').add(agenda);
  }

  // === Fim da Função Criar ===

  // =======================================================================

  // === Listagem de tudo que está no banco ===

  //  Lista todos os dados que estão na tabela Users
  getUser() {
    return this.firebase.collection('Users').snapshotChanges();
  }

  //  Lista todos os dados que estão na tabela Serviços de Cabelo
  getServicoCabelo() {
    return this.firebase.collection('Servicos_Cabelos').snapshotChanges();
  }

  //  Lista todos os dados que estão na tabela Serviços de Barba
  getServicoBarba() {
    return this.firebase.collection('Servicos_Barba').snapshotChanges();
  }

  //  Lista todos os dados que estão na tabela Serviços de Depilação
  getServicoDepilacao() {
    return this.firebase.collection('Servicos_Depilacao').snapshotChanges();
  }

  //  Lista todos os dados que estão na tabela Serviços de Tintura
  getServicoTintura() {
    return this.firebase.collection('Servicos_Tintura').snapshotChanges();
  }

  //  Lista todos os dados que estão na tabela Serviços de Hidratação
  getServicoHidratacao() {
    return this.firebase.collection('Servicos_Hidratacao').snapshotChanges();
  }

  // === Fim da listagem de tudo que está no banco ===

  // =======================================================================

  // === Listagem atraves do ID ===

  //  Lista apenas um dado atraves do id da tabela Users 
  getIdUsers(id) {
    return this.firebase.collection('Users').doc(String(id)).valueChanges();
  }

  // === Fim da Listagem de ID ===

  // =======================================================================

  // === Atualização ===

  updateUsers(id, user : Users) {
    this.firebase.collection('Users').doc(id).update(user).then(() => {}).catch((err) => console.log(err))
  }

  // === Fim da Atualização ===

  // =======================================================================

  // === Deletar ===

  deleteUsers(id: string) {
    this.firebase.doc('Users/' + id).delete();
  }

  // === Fim da Função Deletar ===
}
