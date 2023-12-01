import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit{
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService){}

  ngOnInit(): void { //tudo o que vc quer que seja carregado quando o componente for inicializado
    this.service.listar().subscribe((listaPensamentos) => { //subscribe para acompanhar
      this.listaPensamentos = listaPensamentos;
    });
  }

}
