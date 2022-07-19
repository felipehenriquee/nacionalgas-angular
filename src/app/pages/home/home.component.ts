import { ItensService } from './../../services/itens.service';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies/companies.service';
import { Title } from '@angular/platform-browser';
import { MetaTagService } from 'src/app/services/meta/meta-tag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaObjetos:any ;
  tipo="Todos";
  pesquisa = ""
  companhia: any;
  companhiaName: any;
  collections: any;
  items: any = [];
  constructor(private title: Title, private metadataService: MetaTagService,
    private produtos: ProdutosService, private route: ActivatedRoute, private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.title.setTitle('sdfds')
    this.route.params.subscribe(params =>  {
      this.companhiaName = params['nickname']
      this.companiesService.getOne(this.companhiaName).subscribe(res=>{
        this.companhia = res;
        this.metadataService.updateMetadata({
          title: this.companhia.company.nickname+' Bem-vindo ao meu catálogo',
          description: 'There is some content on page 1',
          image: this.companhia.company.logoImageUrl
        });
        console.log(this.companhia)
      })
      this.todasColecoes();

      
      
    });


  }
  itemPesquisa(e: any){
    this.pesquisa=(e.target.value);
  }
  todasColecoes(){
    this.produtos.getAll(this.companhiaName).subscribe(res=>{
      const result: any = res;
      this.collections = result.collections;
      console.log(result)
      for (let i = 0; i < result.collections.length; i++) {
        for (let j = 0; j < result.collections[i].vrItems.length; j++) {

          result.collections[i].vrItems[j].tipo = result.collections[i].collectionName;
          this.items.push(result.collections[i].vrItems[j])
          
        }

        
      }

    });
  }
  tiraEspaco(palavra: string){
    const result = palavra.split(" ").join("-");
    console.log(result)
    return result;
  }

}
