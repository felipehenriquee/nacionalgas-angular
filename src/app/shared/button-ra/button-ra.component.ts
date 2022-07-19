import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArModelService } from 'src/app/services/arModel/ar-model.service';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-button-ra',
  templateUrl: './button-ra.component.html',
  styleUrls: ['./button-ra.component.css']
})
export class ButtonRaComponent implements OnInit {
  @Output() codeChange: any = new EventEmitter()
  @Input() code: any;
  listaObjetos:any = [];
  tipo="Todos";
  pesquisa = ""
  celular = false;
  obj = "";
  glb = "";
  usdz = "";
  iphone = false;
  arInfo: any;
  constructor(private route: ActivatedRoute, private produtoService: ProdutosService, private arModelService: ArModelService) { }

  ngOnInit(): void {
    this.produtoService.getOne(this.code).subscribe(res => {
      const result: any = res
      this.glb = result.glbFileUrl;
      this.usdz = result.usdzFileUrl;
    })

    this.celular = this.detectar_mobile();
    this.iphone = this.isIphone();
  }
  detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }
   isIphone() { 
    if( navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    
    ){
       return true;
     }
    else {
       return false;
     }
   }
   async irPara(){

    window.location.href = `https://teste.simplexr.com.br/#/catalogo/${this.code}`;
    // window.location.href = `#/erro`;
   }

   async save(){
    const dados = {
      link: this.arInfo.ar_link,
      idModel: this.arInfo.id ,
      clique: 1,
      ultimoClique: new Date(),
      nome: this.arInfo.nameAR
    }
    this.arModelService.createArModels(dados).subscribe(res => {
      const result: any = res;
      const tipo = this.detectar_mobile() == true ? 'smartphone' : 'desktop';
      let smartphone = "Desktop"
      if (tipo === 'smartphone'){
        smartphone = this.isIphone() == true ? 'Iphone' : 'Android';
      }
      const dados2 = {
        arModel: result._id,
        nome: location.hostname, 
        url: location.href,
        tipo: smartphone,
        clique: 1,
        ultimoClique: new Date(),
      }
      console.log(dados2)
      this.arModelService.createSites(dados2).subscribe(res2 => {
        console.log(res2)
        if ( dados2.tipo === "Desktop"){
          window.location.href = `https://simplexr.bugaboostudio.com.br/model?id=${this.obj}`;

        }
      })
    })
   }
}
