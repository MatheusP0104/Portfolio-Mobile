import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicos } from 'src/app/models/servicos';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-update-barba',
  templateUrl: './update-barba.page.html',
  styleUrls: ['./update-barba.page.scss'],
})
export class UpdateBarbaPage implements OnInit {
  Consultas : Servicos[];
  editForm: FormGroup
  id: any

  constructor(
    private service: CrudService,
    private activateRoute: ActivatedRoute,
    private route: Router,
    public formBuilder : FormBuilder
  ) { 
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.service.getIdServicosBarba(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        nome: [data['nome']],
        descricao: [data['descricao']],
        valor: [data['valor']]
      })
    })
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      valor: ['']
    })
  }

  onSubmit() {
    this.service.updateServicoBarba(this.id, this.editForm.value)
  }

}
