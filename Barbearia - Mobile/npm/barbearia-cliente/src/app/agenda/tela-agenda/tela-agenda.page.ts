import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Agendamento } from 'src/app/models/agendamento';
import { Servicos } from 'src/app/models/servicos';
import { Users } from 'src/app/models/users';
import { CrudService } from 'src/app/services/crud.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IonDatetime } from '@ionic/angular';


@Component({
  selector: 'app-tela-agenda',
  templateUrl: './tela-agenda.page.html',
  styleUrls: ['./tela-agenda.page.scss'],
})

export class TelaAgendaPage implements OnInit {
  @ViewChild('myDate') myDate: IonDatetime;
  dataHora: string;
  horarioSelecionado: string;
  UserData: any
  userName:string
  servicoCabelo: string = 'Nenhum';
  servicoBarba: string = 'Nenhum';
  servicoTintura: string = 'Nenhum';
  servicoDepilacao: string = 'Nenhum';
  servicoHidratacao: string = 'Nenhum';
  pagamento: string;
  mensagem: string;
  saida: string;
  id: any
  

  ConsultasCabelo : Servicos[];
  ConsultasUser : Users[];
  ConsultasBarba : Servicos[];
  ConsultasTintura : Servicos[];
  ConsultasDepilacao : Servicos[];
  ConsultasHidratacao : Servicos[];
  public editMode = 1

  
  constructor(
    private service: CrudService,
    private alertController: AlertController,
    private afsAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
  }

 
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: this.mensagem,
      message: this.saida,
      cssClass: 'custom-alert',
      buttons: ['Voltar'],
    });

    await alert.present();
  }


  async ngOnInit() {
    const uid = (await this.afsAuth.currentUser).uid;
      const userDoc = await this.firestore.collection('Users').doc(uid).get().toPromise();
       this.UserData = userDoc.data();
    this.userName = this.UserData.nome
    
    // Consulta do Cabelo
    this.service.getServicoCabelo().subscribe((res) => {
      this.ConsultasCabelo = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Servicos)
        }
      })
    })

    // Consulta da Barba
    this.service.getServicoBarba().subscribe((res) => {
      this.ConsultasBarba = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Servicos)
        }
      })
    })

      // Consulta da Tintura
      this.service.getServicoTintura().subscribe((res) => {
        this.ConsultasTintura = res.map((t) => {
          return {
            id: t.payload.doc.id,
            ...(t.payload.doc.data() as Servicos)
          }
        })
      })

      // Consulta da Depilacao
    this.service.getServicoDepilacao().subscribe((res) => {
      this.ConsultasDepilacao = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Servicos)
        }
      })
    })


      // Consulta da Hidratacao
      this.service.getServicoHidratacao().subscribe((res) => {
        this.ConsultasHidratacao = res.map((t) => {
          return {
            id: t.payload.doc.id,
            ...(t.payload.doc.data() as Servicos)
          }
        })
      })
  }

  

  async selecionarHorario(horario: string) {
    // desmarca as outras checkboxes
    document.querySelectorAll('.horario ion-checkbox').forEach((checkbox) => {
      checkbox['checked'] = false;
    });
    
    if (await this.verificarDisponibilidade(this.dataHora, horario)) {
      // marca a checkbox selecionada
      this.horarioSelecionado = horario;
      document.querySelector(`.horario[label="${horario}"] ion-checkbox`)['checked'] = true;
    } else {
      // se o horário já estiver agendado, exibe uma mensagem de erro
      const alert = await this.alertController.create({
        header: 'Horário já agendado',
        message: 'Este horário já foi agendado. Por favor, selecione outro horário.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
  
  
  async verificarDisponibilidade(data: string, horario: string): Promise<boolean> {
    const agendamentosRef = this.firestore.collection('Agendamento').ref;
    const queryRef = agendamentosRef.where('data', '==', data).where('horario', '==', horario); 
    const querySnapshot = await queryRef.get();
    if (!querySnapshot.empty) {
      // horário já agendado, não permitir agendamento
      return false;
    } else {
      // horário disponível, permitir agendamento
      return true;
    }
  }

  onDateChange(event) {
    const selectedDate = new Date(event.detail.value);
    const isoDate = selectedDate.toISOString();
    const formattedDate = isoDate.slice(8, 10) + '/' + isoDate.slice(5, 7) + '/' + isoDate.slice(0, 4);
    this.dataHora = formattedDate;
  }
  
 


  async onSubmit() {
    if (this.dataHora) {
      this.editMode = 2
      if (this.servicoCabelo != 'Nenhum' || this.servicoBarba != 'Nenhum' || this.servicoTintura != 'Nenhum' || this.servicoDepilacao != 'Nenhum' || this.servicoHidratacao != 'Nenhum') {
        const agendamento: Agendamento = {
          data: this.dataHora,
          horario: this.horarioSelecionado,
          servicoCabelo: this.servicoCabelo.substr(0, 20),
          servicoBarba: this.servicoBarba.substr(0, 20),
          servicoTintura: this.servicoTintura.substr(0, 20),
          servicoDepilacao: this.servicoDepilacao.substr(0, 20),
          servicoHidratacao: this.servicoHidratacao.substr(0, 20),
          pagamento: this.pagamento.substr(0, 20),
          nomeUser: this.userName = this.UserData.nome
        };
        await this.firestore.collection('Agendamento').doc((await this.afsAuth.currentUser).uid).set(agendamento).then(() => {
          this.dataHora = '';
          this.pagamento = '';
          this.editMode = 5;
        });
      } 
      } else {
        this.mensagem = 'Ops, algo de errado!';
        this.saida = 'Por favor, verifique se você selecionou a data e o horário.';
        this.presentAlert();
      }
    } 
  
  edit(){
    switch (this.editMode){
      // se tiver na tela 1(Calendario) vá para tela 2(onde escolhe os cortes)
      case 1:
        this.editMode = 2;
        break;

      // se tiver na tela 2(escolher os cortes) vá para a tela 5(pagamento concluido)
      case 2:
        this.editMode = 5;
        break;

      // se tiver na tela 3(Pagamento Pix) vá para a tela 5(pagamento concluido)
      case 3:
        this.editMode = 5;
        break;

      // se tiver na tela 4(Pagamento no Local) vá para a tela 5(pagamento concluido)
      case 4:
        this.editMode = 5;
        break;
    }
  }
  

  // vá para tela 3(pix)
  Pagamento(){
    if(this.pagamento == 'pix'){
       this.editMode = 3
    }
    else if(this.pagamento =='pagar-no-local'){
      this.editMode = 4
    }
  }

  tela(){
    this.editMode = 1
  }
}
