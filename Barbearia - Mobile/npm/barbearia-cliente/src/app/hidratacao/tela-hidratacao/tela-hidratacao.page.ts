import { Component, OnInit } from '@angular/core';
import { Servicos } from 'src/app/models/servicos';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tela-hidratacao',
  templateUrl: './tela-hidratacao.page.html',
  styleUrls: ['./tela-hidratacao.page.scss'],
})
export class TelaHidratacaoPage implements OnInit {
  Consultas : Servicos[];
  id : any;

  constructor(private service : CrudService) { 
    this.service.getServicoHidratacao().subscribe((res) => {
      this.Consultas = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Servicos)
        }
      })
    })
  }

  ngOnInit() {
  }

}
