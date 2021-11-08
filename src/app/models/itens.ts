export class Itens {
    Id: number;
    Nome: string;
    Descricao: string ;
    Tipo: string;
    Imagem: string ;
    

    constructor(id: number, nome: string, imagem: string, descricao: string, tipo: string){
        this.Id = id;
        this.Nome = nome;
        this.Descricao = descricao;
        this.Imagem = imagem;
        this.Tipo = tipo;
    }
}
