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
      "SKIDS P-2000 COM PITSTOP", "./assets/gas.png", 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris magna, pretium eu malesuada sed, tempor id libero. In congue cursus lorem, eget feugiat nisl accumsan sed. Donec sapien libero, commodo in odio eu, convallis suscipit est. Mauris at molestie nunc, et semper massa. Duis vel magna sem. Aliquam tincidunt orci vitae dui dapibus rhoncus. Aenean ac facilisis libero, at lobortis nulla. Etiam pharetra auctor congue. Nullam tempor pretium nisi. Fusce a ante luctus, mollis mi in, commodo felis. In ornare ultricies nunc, vitae eleifend ipsum auctor at. Proin id nisi nec dolor lobortis iaculis ac sit amet quam. Fusce hendrerit felis sed magna iaculis, ut porta quam iaculis. Nulla luctus arcu sed orci interdum, quis viverra erat dignissim. Nullam condimentum turpis sapien, sit amet rhoncus metus rutrum non. Fusce accumsan lobortis pretium.",
      "Tanque","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/Skids+P2000+com+Pitstop_Rev04.glb","./assets/qrCode.png", "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/usdz_skids_p2000_com_pitstop_rev04___1637700692046.usdz"
      ),
      new Itens(
        2, 
        "SKIDS P-2000 COM VAPORIZADOR ELÉTRICO", "./assets/gas.png", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris magna, pretium eu malesuada sed, tempor id libero. In congue cursus lorem, eget feugiat nisl accumsan sed. Donec sapien libero, commodo in odio eu, convallis suscipit est. Mauris at molestie nunc, et semper massa. Duis vel magna sem. Aliquam tincidunt orci vitae dui dapibus rhoncus. Aenean ac facilisis libero, at lobortis nulla. Etiam pharetra auctor congue. Nullam tempor pretium nisi. Fusce a ante luctus, mollis mi in, commodo felis. In ornare ultricies nunc, vitae eleifend ipsum auctor at. Proin id nisi nec dolor lobortis iaculis ac sit amet quam. Fusce hendrerit felis sed magna iaculis, ut porta quam iaculis. Nulla luctus arcu sed orci interdum, quis viverra erat dignissim. Nullam condimentum turpis sapien, sit amet rhoncus metus rutrum non. Fusce accumsan lobortis pretium.",
        "Tanque","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/Skids+P2000+com+Vaporizador+Eletrico_Rev04.glb","./assets/qrCode.png", "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/usdz_skids_p2000_com_vaporizador_eletrico_rev04___1637700745377.usdz"
        ),
      new Itens(
      3, 
      "SKIDS P-4000 COM VAPORIZADOR ELÉTRICO", "./assets/gas.png", 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris magna, pretium eu malesuada sed, tempor id libero. In congue cursus lorem, eget feugiat nisl accumsan sed. Donec sapien libero, commodo in odio eu, convallis suscipit est. Mauris at molestie nunc, et semper massa. Duis vel magna sem. Aliquam tincidunt orci vitae dui dapibus rhoncus. Aenean ac facilisis libero, at lobortis nulla. Etiam pharetra auctor congue. Nullam tempor pretium nisi. Fusce a ante luctus, mollis mi in, commodo felis. In ornare ultricies nunc, vitae eleifend ipsum auctor at. Proin id nisi nec dolor lobortis iaculis ac sit amet quam. Fusce hendrerit felis sed magna iaculis, ut porta quam iaculis. Nulla luctus arcu sed orci interdum, quis viverra erat dignissim. Nullam condimentum turpis sapien, sit amet rhoncus metus rutrum non. Fusce accumsan lobortis pretium.",
      "Tanque","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/Skids+P4000+com+Vaporizador+Eletrico_Rev04.glb","./assets/qrCode.png", "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/usdz_skids_p4000_com_vaporizador_eletrico_rev04___1637700861006.usdz"
      ),
      new Itens(
        4, 
        "SKID GL P-2003", "./assets/gas.png", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris magna, pretium eu malesuada sed, tempor id libero. In congue cursus lorem, eget feugiat nisl accumsan sed. Donec sapien libero, commodo in odio eu, convallis suscipit est. Mauris at molestie nunc, et semper massa. Duis vel magna sem. Aliquam tincidunt orci vitae dui dapibus rhoncus. Aenean ac facilisis libero, at lobortis nulla. Etiam pharetra auctor congue. Nullam tempor pretium nisi. Fusce a ante luctus, mollis mi in, commodo felis. In ornare ultricies nunc, vitae eleifend ipsum auctor at. Proin id nisi nec dolor lobortis iaculis ac sit amet quam. Fusce hendrerit felis sed magna iaculis, ut porta quam iaculis. Nulla luctus arcu sed orci interdum, quis viverra erat dignissim. Nullam condimentum turpis sapien, sit amet rhoncus metus rutrum non. Fusce accumsan lobortis pretium.",
        "GLP","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/SKID+TQ+P-2000.glb","./assets/qrCode.png", "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/gasIphone.usdz"
        ),
      new Itens(
        5, 
        "SKID GL P-2004", "./assets/gas.png", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris magna, pretium eu malesuada sed, tempor id libero. In congue cursus lorem, eget feugiat nisl accumsan sed. Donec sapien libero, commodo in odio eu, convallis suscipit est. Mauris at molestie nunc, et semper massa. Duis vel magna sem. Aliquam tincidunt orci vitae dui dapibus rhoncus. Aenean ac facilisis libero, at lobortis nulla. Etiam pharetra auctor congue. Nullam tempor pretium nisi. Fusce a ante luctus, mollis mi in, commodo felis. In ornare ultricies nunc, vitae eleifend ipsum auctor at. Proin id nisi nec dolor lobortis iaculis ac sit amet quam. Fusce hendrerit felis sed magna iaculis, ut porta quam iaculis. Nulla luctus arcu sed orci interdum, quis viverra erat dignissim. Nullam condimentum turpis sapien, sit amet rhoncus metus rutrum non. Fusce accumsan lobortis pretium.",
        "GLP","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/SKID+TQ+P-2000.glb","./assets/qrCode.png", "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/gasIphone.usdz"
        ),
      new Itens(
        6, 
        "SKID GL P-2005", "./assets/gas.png", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris magna, pretium eu malesuada sed, tempor id libero. In congue cursus lorem, eget feugiat nisl accumsan sed. Donec sapien libero, commodo in odio eu, convallis suscipit est. Mauris at molestie nunc, et semper massa. Duis vel magna sem. Aliquam tincidunt orci vitae dui dapibus rhoncus. Aenean ac facilisis libero, at lobortis nulla. Etiam pharetra auctor congue. Nullam tempor pretium nisi. Fusce a ante luctus, mollis mi in, commodo felis. In ornare ultricies nunc, vitae eleifend ipsum auctor at. Proin id nisi nec dolor lobortis iaculis ac sit amet quam. Fusce hendrerit felis sed magna iaculis, ut porta quam iaculis. Nulla luctus arcu sed orci interdum, quis viverra erat dignissim. Nullam condimentum turpis sapien, sit amet rhoncus metus rutrum non. Fusce accumsan lobortis pretium.",
        "GLP","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/SKID+TQ+P-2000.glb","./assets/qrCode.png", "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/models-3d/gasIphone.usdz"
        ),
      
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
