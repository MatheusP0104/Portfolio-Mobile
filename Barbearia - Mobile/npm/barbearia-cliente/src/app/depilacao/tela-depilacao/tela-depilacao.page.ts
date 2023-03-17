import { Component, OnInit } from '@angular/core';
import { Servicos } from 'src/app/models/servicos';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tela-depilacao',
  templateUrl: './tela-depilacao.page.html',
  styleUrls: ['./tela-depilacao.page.scss'],
})
export class TelaDepilacaoPage implements OnInit {
  Consultas : Servicos[];
  id : any;

  constructor(private service : CrudService) {
    this.service.getServicoDepilacao().subscribe((res) => {
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
