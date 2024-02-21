import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = { //input faz receber infos do componente pai, que é listar-pensamentos
    id: 0,
    conteudo: '',
    modelo: '',
    autoria: '',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService){}

  definirLarguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string{
    if(this.pensamento.favorito == false){
      return 'inativo';
    }
    return 'ativo';
  }

  atualizarFavorito(){
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1) //splice modifica array original, removendo pensamento
    });
  }

  ngOnInit(): void {

  }

}
