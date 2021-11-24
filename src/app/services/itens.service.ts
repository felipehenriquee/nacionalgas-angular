import { Itens } from './../models/itens';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  private objetos: Itens[] = [];
  
  constructor() { 
    
  }

  criaObjetos(){
    this.objetos = [new Itens(
      1, 
      "SKID DE P-2000 COM PITSTOP", "./assets/tanques/Skid2000Pitstop.jpg", 
      "Instalação composta com 2 Skids de vasos P-2000 com grupo de regulagem mais 1 Skid de Pit-stop padrão Nacional Gás",
      "Tanque","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/Skids+P2000+com+Pitstop_Rev04.glb","./assets/qrcode/Skid P-2000Pitstop.png", "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/usdz_skids_p2000_com_pitstop_rev04___1637700692046.usdz"
      ),
      new Itens(
        2, 
        "SKID DE P-2000 COM VAPORIZADOR ELÉTRICO", "./assets/tanques/Skid2000VaporEletrico.jpg", 
        "Instalação composta com 2 Skids de vasos P-2000 com grupo de regulagem mais 1 Skid de vaporizador elétrico (100 a 250kg/h)",
        "Tanque","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/Skids+P2000+com+Vaporizador+Eletrico_Rev04.glb","./assets/qrcode/Skid P-2000Vaporizadoreletrico.png", "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/usdz_skids_p2000_com_vaporizador_eletrico_rev04___1637700745377.usdz"
        ),
      new Itens(
      3, 
      "SKID DE P-4000 COM VAPORIZADOR ELÉTRICO", "./assets/tanques/Skid4000Vporeletrico.jpg", 
      "Instalação composta com 2 Skids de vasos P-4000 com grupo de regulagem mais 1 Skid de vaporizador elétrico (100 a 250kg/h)",

      "Tanque","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/Skids+P4000+com+Vaporizador+Eletrico_Rev04.glb","./assets/qrcode/Skid P-4000Vaporizadoreletrico.png", "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/usdz_skids_p4000_com_vaporizador_eletrico_rev04___1637700861006.usdz"
      ),
      new Itens(
        4, 
        "SKID DE P-2000", "./assets/gas.png", 
        "Instalação composta com 1 Skid de vasos P-4000 com grupo de regulagem",
        "Tanque","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/SKID+TQ+P-2000.glb","./assets/qrcode/Skid P-2000Pitstop.png", "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/gasIphone.usdz"
        ),
      // 
      
    ]
  }

  getObjetos(){
    return this.objetos;
  }
  getObjetosId(id: number){
    this.criaObjetos();
    
    for (let i = 0; i < this.objetos.length; i++) {
      if (this.objetos[i].Id == id){
        return this.objetos[i]
      }
      
    }
    return false;
  }
}
