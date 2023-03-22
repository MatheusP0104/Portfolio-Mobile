import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Agendamento } from 'src/app/models/agendamento';
import { Servicos } from 'src/app/models/servicos';
import { Users } from 'src/app/models/users';
import { CrudService } from 'src/app/services/crud.service';



@Component({
  selector: 'app-tela-agenda',
  templateUrl: './tela-agenda.page.html',
  styleUrls: ['./tela-agenda.page.scss'],
})
export class TelaAgendaPage implements OnInit {
  dataHora: string;
  servicoCabelo: string;
  servicoBarba: string;
  servicoTintura: string;
  servicoDepilacao: string;
  servicoHidratacao: string;
  nenhumCabelo: boolean  = false
  pagamento: string;
  nomeUser: string
  mensagem: string;
  saida: string;
  

  ConsultasCabelo : Servicos[];
  ConsultasUser : Users[];
  ConsultasBarba : Servicos[];
  ConsultasTintura : Servicos[];
  ConsultasDepilacao : Servicos[];
  ConsultasHidratacao : Servicos[];
  public editMode = 1
  

  constructor(
    private service: CrudService,
    private alertController: AlertController
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: this.mensagem,
      message: this.saida,
      buttons: ['Voltar'],
    });

    await alert.present();
  }

  ngOnInit() {
    // Consulta do Usuário
    this.service.getUser().subscribe((res) => {
      this.ConsultasUser = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Users)
        }
      })
    })

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
  onSubmit(){
    if (this.dataHora){
      const agendamento: Agendamento = {
        data: this.dataHora.substr(0, 10),
        horario: this.dataHora.substr(11, 5),
        servicoCabelo: this.servicoCabelo.substr(0, 20),
        servicoBarba: this.servicoBarba.substr(0, 20),
        servicoTintura: this.servicoTintura.substr(0, 20),
        servicoDepilacao: this.servicoDepilacao.substr(0, 20),
        servicoHidratacao: this.servicoHidratacao.substr(0, 20),
        pagamento: this.pagamento.substr(0, 20),
        nomeUser: this.nomeUser.substr(0, 20)
      };

    this.service.createAgenda(agendamento).then(() => {
      this.dataHora = '';
      this.servicoCabelo = '';
      this.servicoBarba = '';
      this.servicoTintura = '';
      this.servicoDepilacao = '';
      this.servicoHidratacao = '';
      this.pagamento = '';
      this.editMode = 5
    })
  }
  else{
    this.mensagem = 'Ops algo de Errado!'
    this.saida = 'Por Favor verifique se não esqueceu de nada'
    this.presentAlert()
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
