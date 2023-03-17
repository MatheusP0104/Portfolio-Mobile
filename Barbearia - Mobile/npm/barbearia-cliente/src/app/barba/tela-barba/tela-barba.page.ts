import { Component, OnInit } from '@angular/core';
import { Servicos } from 'src/app/models/servicos';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tela-barba',
  templateUrl: './tela-barba.page.html',
  styleUrls: ['./tela-barba.page.scss'],
})
export class TelaBarbaPage implements OnInit {
  Consultas : Servicos[];
  id : any;

  constructor(private service : CrudService) {
    this.service.getServicoBarba().subscribe((res) => {
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
