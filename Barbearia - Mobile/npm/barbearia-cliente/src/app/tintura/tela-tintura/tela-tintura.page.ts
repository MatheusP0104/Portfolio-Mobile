import { Component, OnInit } from '@angular/core';
import { Servicos } from 'src/app/models/servicos';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tela-tintura',
  templateUrl: './tela-tintura.page.html',
  styleUrls: ['./tela-tintura.page.scss'],
})
export class TelaTinturaPage implements OnInit {
  Consultas : Servicos[];
  id : any;

  constructor(private service : CrudService) { 
    this.service.getServicoTintura().subscribe((res) => {
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
