import { ItensService } from './../../services/itens.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
  mostraInfo = true;
  obj:any = null;
  objId: number = 0;
  constructor(private objeto: ItensService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>  {
      this.obj = this.objeto.getObjetosId(params['id'])
      if(params['nome']=="teste"){
        this.router.navigate([`/catalogo/${this.obj.Id}/${this.tiraEspaco(this.obj.Nome)}`])
      }
      
      
    });
      
  }
  tiraEspaco(palavra: string){
    const result = palavra.split(" ").join("-");
    console.log(result)
    return result;
  }

}
