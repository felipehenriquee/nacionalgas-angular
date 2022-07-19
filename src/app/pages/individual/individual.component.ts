import { MetaTagService } from './../../services/meta/meta-tag.service';
import { environment } from 'src/environments/environment';
import { ItensService } from './../../services/itens.service';
import { Component, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode'
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { WindowService } from 'src/app/services/window/window.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
  abrir: any;
  mostraInfo = true;
  obj:any = null;
  objId: number = 0;
  elementType = NgxQrcodeElementTypes.IMG;  
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;  
  value: any;
  modelViewer: any;
  descricao = true;
  code: any;
  descriptionPath : string = "multiquadris.htm";
  urlSafe: any;
  innerWidth: any;
  tamanhoQrCode: any;
  constructor(  private metaService: MetaTagService, private title: Title, private janela: WindowService,
    private http: HttpClient, private sanitizer: DomSanitizer,
    private route: ActivatedRoute, private router: Router, private produtoService: ProdutosService) {

   }

  ngOnInit(): void {
    const janelinha: any = this.janela.getWindow();
    this.innerWidth = janelinha.innerWidth;
    this.tamanhoQrCode = janelinha.innerWidth*(12/100);
    this.title.setTitle("tewst");



    this.route.params.subscribe(params =>  {

      this.produtoService.getOne(params['id']).subscribe(res=>{
        // if(this.detectar_mobile()){
        //   window.location.href = window.location.host+"/#/d/"+params['id']
        // }
        this.code = params['id']
        this.value = janelinha.location.host+"/#/d/"+this.code;
        this.obj = res;
        console.log(this.obj)
        this.urlSafe = this.safeUrl();
        // setTimeout(this.teste, 3000)

      })


      
      
    });
      
  }
  // ngAfterViewChecked(){
  //   if(this.modelViewer==null){
  //     this.modelViewer = document.getElementById('model-viewer')
  //     this.teste();
  //   }

  // }
  teste(){
    const teste = document.getElementById('teste')
    teste?.click();


  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    this.tamanhoQrCode = window.innerWidth*(12/100);
  }
  safeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.siteModelo}${this.obj.glbFileUrl}&usdz=${this.obj.usdzFileUrl}&code=${this.code}`);
    // return this.sanitizer.bypassSecurityTrustResourceUrl(`https://felipehenriquee.github.io/model3d/index.html?glb=${this.obj.glbFileUrl}&usdz=${this.obj.usdzFileUrl}`);

  }
  teste2(){
    this.modelViewer = document.getElementById('model-viewer')
    console.log(this.modelViewer)
    try {
      // this.modelViewer.activateAR();
      const result = this.modelViewer.loaded;
      console.log(result)

    } catch (error) {
      console.log(error)
    }
  }
  tiraEspaco(palavra: string){
    const result = palavra.split(" ").join("-");
    console.log(result)
    return result;
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
   ir(){
    window.location.href = "/#/"+this.obj.companyData.nickname
   }

}
