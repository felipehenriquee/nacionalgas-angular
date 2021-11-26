import { ItensService } from './../../services/itens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaObjetos:any = [];
  tipo="Todos";
  pesquisa = ""
  constructor(private objetos: ItensService) { }

  ngOnInit(): void {
    this.objetos.criaObjetos();
    this.listaObjetos = this.objetos.getObjetos();
  }
  itemPesquisa(e: any){
    this.pesquisa=(e.target.value);
  }
  tiraEspaco(palavra: string){
    const result = palavra.split(" ").join("-");
    console.log(result)
    return result;
  }

}
