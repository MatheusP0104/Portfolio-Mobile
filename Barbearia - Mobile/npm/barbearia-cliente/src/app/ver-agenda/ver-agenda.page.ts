import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Agendamento } from '../models/agendamento';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';





@Component({
  selector: 'app-ver-agenda',
  templateUrl: './ver-agenda.page.html',
  styleUrls: ['./ver-agenda.page.scss'],
})
export class VerAgendaPage implements OnInit {
  agendamento: Agendamento
  
  

  constructor(
    private afsAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private alertController: AlertController,
    private router: Router
  ) { }

  
  async ngOnInit() {
    const uid = (await this.afsAuth.currentUser).uid
    try {
      const doc = await this.firestore.collection('Agendamento').doc(uid).get().toPromise()
      if (doc.exists) {
        var data = doc.data() as Agendamento
        document.getElementById("nome").textContent = data.nomeUser
        document.getElementById("data").textContent = data.data
        document.getElementById("hora").textContent = data.horario

        if (data.servicoCabelo !== "Nenhum") {
          document.getElementById("servicoCabelo").textContent = data.servicoCabelo
        
      }
      
      if (data.servicoBarba !== "Nenhum") {
        document.getElementById("servicoBarba").textContent = data.servicoBarba
        
      }
      
      if (data.servicoTintura !== "Nenhum") {
        document.getElementById("servicoTintura").textContent = data.servicoTintura
      
      }
      
      if (data.servicoDepilacao !== "Nenhum") {
        document.getElementById("servicoDepilacao").textContent = data.servicoDepilacao
        
      }
      
      if (data.servicoHidratacao !== "Nenhum") {
          document.getElementById("servicohidra").textContent = data.servicoHidratacao
        
      }
        document.getElementById("pagamento").textContent = data.pagamento

        console.log(data)
      } else {
        console.log('Deu ERRADO');
        
      }
      
    } catch (error) {
      console.log(error)
    }
  }

 async deletarAgenda() {
      const uid = (await this.afsAuth.currentUser).uid
      const doc = await this.firestore.collection('Agendamento').doc(uid)
      await doc.delete()
       this.router.navigateByUrl('/tela-agenda')
      
  }

 
}
