import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/agendamento';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-ver-agenda',
  templateUrl: './ver-agenda.page.html',
  styleUrls: ['./ver-agenda.page.scss'],
})
export class VerAgendaPage implements OnInit {
  Consultas: Agendamento[]
  id : any

  constructor(
    private service : CrudService,
    private activateRouter : ActivatedRoute,) {
      this.id = this.activateRouter.snapshot.paramMap.get('id')
      this.service.getIdServicosCabelo(this.id)
     }

  ngOnInit() {
    this.service.getAgendamento().subscribe((res) => {
      this.Consultas = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Agendamento)
        }
      })
    })
  }

}
