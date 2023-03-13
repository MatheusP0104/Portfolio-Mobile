import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Agendamento } from 'src/app/models/agendamento';
import { Servicos } from 'src/app/models/servicos';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-tela-agenda',
  templateUrl: './tela-agenda.page.html',
  styleUrls: ['./tela-agenda.page.scss'],
})
export class TelaAgendaPage implements OnInit {
  dataHora: string;
  servico: string;
  pagamento: string;
  Consultas : Servicos[];
  public editMode = 1
  

  constructor(
    private service: CrudService,
    private alertController: AlertController
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Algo deu errado =(',
      message: 'Por Favor, preencha todos os campos corretamente.',
      buttons: ['Voltar'],
    });

    await alert.present();
  }

  ngOnInit() {
    this.service.getServico().subscribe((res) => {
      this.Consultas = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Servicos)
        }
      })
    })
  }

  onSubmit(){
    if (this.dataHora) {
      const agendamento: Agendamento = {
        data: this.dataHora.substr(0, 10),
        horario: this.dataHora.substr(11, 5),
        servico: this.servico,
        pagamento: '',
      };

    this.service.createAgenda(agendamento).then(() => {
      console.log('Agendamento adicionado com sucesso!');
      this.dataHora = '';
    })
    .catch((error) => {
      console.error('Erro ao adicionar agendamento:', error);
    });
  
    
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
  pix(){
    this.editMode = 3
  }

  // vá para tela 4(pagamento no local)
  local(){
    this.editMode = 4
  }

  tela(){
    this.editMode = 1
  }
}
