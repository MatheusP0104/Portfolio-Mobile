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

  // === Criações ===
  
  // Cria a tabela Admin no firebase
  create(user: Users) {
    return this.firebase.collection('Admin').add(user);
  }

  // Cria a tabela Serviços de Cabelos no firebase
  createServicoCabelo(servico: Servicos) {
    return this.firebase.collection('Servicos_Cabelos').add(servico);
  }

  // Cria a tabela Serviços de Barba no firebase
  createServicoBarba(servico: Servicos) {
    return this.firebase.collection('Servicos_Barba').add(servico);
  }

   // Cria a tabela Serviços de Depilação no firebase
   createServicoDepilacao(servico: Servicos) {
    return this.firebase.collection('Servicos_Depilacao').add(servico);
  }


   // Cria a tabela Serviços de Tintura no firebase
   createServicoTintura(servico: Servicos) {
    return this.firebase.collection('Servicos_Tintura').add(servico);
  }

   // Cria a tabela Serviços de Hidratação no firebase
   createServicoHidratacao(servico: Servicos) {
    return this.firebase.collection('Servicos_Hidratacao').add(servico);
  }

  // === Fim da criação ===

  // =======================================================================

  // === Listagem de tudo que está no banco ===

//  Lista todos os dados que estão na tabela Admin
  getAdmin() {
    return this.firebase.collection('Admin').snapshotChanges();
  }

  //  Lista todos os dados que estão na tabela Serviços de Cabelos
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
  //  Lista todos os dados que estão na tabela Agendamento
  getAgendamento() {
    return this.firebase.collection('Agendamento').snapshotChanges();
  }

  // === Fim da listagem de tudo que está no banco ===

  // =======================================================================

  // === Listagem atraves do ID ===

  // Lista apenas um dado atraves do id da tabela Serviços de Cabelos
  getIdServicosCabelo(id) {
    return this.firebase.collection('Servicos_Cabelos').doc(String(id)).valueChanges();
  }
  // Lista apenas um dado atraves do id da tabela Serviços de Barba
  getIdServicosBarba(id) {
    return this.firebase.collection('Servicos_Barba').doc(String(id)).valueChanges();
  }
  // Lista apenas um dado atraves do id da tabela Serviços de Depilacao
  getIdServicosDepilacao(id) {
    return this.firebase.collection('Servicos_Depilacao').doc(String(id)).valueChanges();
  }
  // Lista apenas um dado atraves do id da tabela Serviços de Tintura
  getIdServicosTintura(id) {
    return this.firebase.collection('Servicos_Tintura').doc(String(id)).valueChanges();
  }
  // Lista apenas um dado atraves do id da tabela Serviços de Hidratacao
  getIdServicosHidratacao(id) {
    return this.firebase.collection('Servicos_Hidratacao').doc(String(id)).valueChanges();
  }

  // Lista apenas um daod atraves do id da tabela Admin
  getIdAdmin(id) {
    return this.firebase.collection('Admin').doc(String(id)).valueChanges();
  }

  // Lista apenas um daod atraves do id da tabela Agendamento
  getIdAgendamento(id) {
    return this.firebase.collection('Agendamento').doc(String(id)).valueChanges();
  }

  // === Fim da listagem por ID ===

  // =======================================================================

  // === Atualizações ===

  //Atualiza os dados da tabela de Serviços de Cabelos 
  updateServicoCabelo(id, servico : Servicos) {
    this.firebase.collection('Servicos_Cabelos').doc(id).update(servico).then(() => {
      this.route.navigate(['/tela-cabelo']);
    }).catch((err) => console.log(err))
  }

  //Atualiza os dados da tabela de Serviços de Barba 
  updateServicoBarba(id, servico : Servicos) {
    this.firebase.collection('Servicos_Barba').doc(id).update(servico).then(() => {
      this.route.navigate(['/tela-barba']);
    }).catch((err) => console.log(err))
  }

  //Atualiza os dados da tabela de Serviços de Depilacao
  updateServicoDepilacao(id, servico : Servicos) {
    this.firebase.collection('Servicos_Depilacao').doc(id).update(servico).then(() => {
      this.route.navigate(['/tela-depilacao']);
    }).catch((err) => console.log(err))
  }

  //Atualiza os dados da tabela de Serviços de Tintura 
  updateServicoTintura(id, servico : Servicos) {
    this.firebase.collection('Servicos_Tintura').doc(id).update(servico).then(() => {
      this.route.navigate(['/tela-tintura']);
    }).catch((err) => console.log(err))
  }

  //Atualiza os dados da tabela de Serviços de Hidratacao 
  updateServicoHidratacao(id, servico : Servicos) {
    this.firebase.collection('Servicos_Hidratacao').doc(id).update(servico).then(() => {
      this.route.navigate(['/tela-hidratacao']);
    }).catch((err) => console.log(err))
  }

  // Atualiza os dados da tabela de Admin
  updateAdmin(id, admin : Users) {
    this.firebase.collection('Admin').doc(id).update(admin).then(() => {}).catch((err) => console.log(err))
  }

  // === Fim das Atualizações ===

  // =======================================================================

  // === Deletar ===

  // Deleta todos os dados com base no id escolhido da tabela Servicos de Cabelos
  deleteServicoCabelo(id: string) {
    this.firebase.doc('Servicos_Cabelos/' + id).delete();
  }

  // Deleta todos os dados com base no id escolhido da tabela Servicos de Barba
  deleteServicoBarba(id: string) {
    this.firebase.doc('Servicos_Barba/' + id).delete();
  }

  // Deleta todos os dados com base no id escolhidoda tabela Servicos de Depilação
  deleteServicoDepilacao(id: string) {
    this.firebase.doc('Servicos_Depilacao/' + id).delete();
  }

  // Deleta todos os dados com base no id escolhido da tabela Servicos de Tintura
  deleteServicoTintura(id: string) {
    this.firebase.doc('Servicos_Tintura/' + id).delete();
  }

  // Deleta todos os dados com base no id escolhido da tabela Servicos de Hidratação
  deleteServicoHidratacao(id: string) {
    this.firebase.doc('Servicos_Hidratacao/' + id).delete();
  }

  // Delete todos os dados com base no id escolhido da tabela do Admin
  deleteAdmin(id: string) {
    this.firebase.doc('Admin/' + id).delete();
  }

  // === Fim da função Deletar ===
}