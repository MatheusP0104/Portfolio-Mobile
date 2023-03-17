import { Component, OnInit } from '@angular/core';
import { Servicos } from '../models/servicos';
import { CrudService } from '../services/crud.service';




@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.page.html',
  styleUrls: ['./update-todo.page.scss'],
})
export class UpdateTodoPage implements OnInit {
  Consultas : Servicos[];
  id: any

  constructor(
    private service: CrudService
  ) { }

  ngOnInit() {}

}
