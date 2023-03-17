import { Component, OnInit } from '@angular/core';
import { Servicos } from 'src/app/models/servicos';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tela-cabelo',
  templateUrl: './tela-cabelo.page.html',
  styleUrls: ['./tela-cabelo.page.scss'],
})
export class TelaCabeloPage implements OnInit {
  Consultas : Servicos[];
  id : any;
  
  constructor(
    private service : CrudService) {  }

  ngOnInit() {
    this.service.getServicoCabelo().subscribe((res) => {
      this.Consultas = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Servicos)
        }
      })
    })
  }
}
