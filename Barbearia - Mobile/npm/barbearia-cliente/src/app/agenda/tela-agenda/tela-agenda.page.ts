import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Servicos } from 'src/app/models/servicos';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-tela-agenda',
  templateUrl: './tela-agenda.page.html',
  styleUrls: ['./tela-agenda.page.scss'],
})
export class TelaAgendaPage implements OnInit {
  agendaForm : FormGroup
  Consultas : Servicos[];
  selectedDate: string;
  public editMode = 4

  constructor(
    private service: CrudService,
    public formBuilder: FormBuilder,
    private alertController: AlertController
  ) { }

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
    this.agendaForm = this.formBuilder.group({
      data : ['', Validators.required],
      horario : ['', Validators.required],
      servico : ['', Validators.required],
      pagamento : ['', Validators.required]
    })
  }

  onSubmit(){
    if (!this.agendaForm.valid) {
      this.presentAlert()
    } else {
      this.service.createAgenda(this.agendaForm.value).then(() => {
      this.agendaForm.reset();
      }).catch((err) => console.log(err))
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
