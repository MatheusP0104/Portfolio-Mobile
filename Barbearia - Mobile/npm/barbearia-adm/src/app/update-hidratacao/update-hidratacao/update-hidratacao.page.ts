import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Servicos } from 'src/app/models/servicos';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-update-hidratacao',
  templateUrl: './update-hidratacao.page.html',
  styleUrls: ['./update-hidratacao.page.scss'],
})
export class UpdateHidratacaoPage implements OnInit {
  Consultas : Servicos[];
  editForm: FormGroup
  id: any

  constructor(
    private service: CrudService,
    private activateRoute: ActivatedRoute,
    public formBuilder : FormBuilder
  ) { 
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.service.getIdServicosHidratacao(this.id).subscribe((data) => {
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
    this.service.updateServicoHidratacao(this.id, this.editForm.value)
  }

}
