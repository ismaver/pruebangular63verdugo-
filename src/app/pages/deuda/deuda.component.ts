import { Component } from '@angular/core';
import { Empresa } from '../../models/empresa';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-deuda',
  templateUrl: './deuda.component.html',
  styleUrls: ['./deuda.component.scss']
})
export class DeudaComponent {
  empresa: any
  Empresa: Empresa= new Empresa();

  constructor(private EmpresaService: EmpresaService){

  }

  

}
