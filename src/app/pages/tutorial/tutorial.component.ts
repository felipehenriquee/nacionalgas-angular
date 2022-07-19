import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  @Output() codeChange: any = new EventEmitter()
  @Input() code: any;
  tutorial = true;
  pagina = 0;
  interval: any;
  instrucoes = [
    "Vamos aprender a usar Realidade Aumentada!", 
    "Procure com a câmera a superfície ideal para o objeto",
    "Use o dedo indicador para mover o objeto",
    "Use dois dedos para mudar o tamanho e rotacionar"
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>  {
      this.code = params['id']
    });
  }
  iniciarTutorial(){
    this.interval = setInterval(() => {
     if(this.pagina<4){
      this.pagina++;
     }
    },5000)
  }
  fechaTutorial(){
    clearInterval(this.interval);
    this.pagina = 0;
  }
  passaPagina(){
    this.pagina++;
    clearInterval(this.interval);
    this.iniciarTutorial();
  }

}
