import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agendamento } from 'src/app/models/agendamento';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-lista-agenda',
  templateUrl: './lista-agenda.page.html',
  styleUrls: ['./lista-agenda.page.scss'],
})
export class ListaAgendaPage implements OnInit {
  Consultas : Agendamento[]
  id: any

  constructor(
    private service : CrudService,
    private activateroute: ActivatedRoute
  ) { 
    this.id = this.activateroute.snapshot.paramMap.get('id')
    this.service.getIdAgendamento(this.id).subscribe((data) => {})
  }

  ngOnInit() {
  }

}
