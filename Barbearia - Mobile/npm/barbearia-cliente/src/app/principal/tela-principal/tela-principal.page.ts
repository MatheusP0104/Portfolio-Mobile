import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { CrudService } from 'src/app/services/crud.service';
import { MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.page.html',
  styleUrls: ['./tela-principal.page.scss'],
})
export class TelaPrincipalPage implements OnInit {
  Consultas : Users[];

  constructor(private service : CrudService, private menuController: MenuController, private router:Router) { }

  ngOnInit() {
    this.service.getUser().subscribe((res) =>{
      this.Consultas = res.map((t) =>{
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Users)
        }
      })
    })

  }

  onClick() {
    this.menuController.close();
  }

  todoList() {
    this.service.getUser().subscribe((data) => {
      console.log(data)
    })
  }

}
