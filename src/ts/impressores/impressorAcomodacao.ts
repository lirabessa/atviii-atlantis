import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";

export default class ImpressorAcomodacao implements Impressor {
    private acomodacao: Acomodacao
    constructor(acomodacao: Acomodacao) {
        this.acomodacao = acomodacao
    }
    imprimir(id?:number): string {
        let descricao = `-- ID: ${id?.toString()} --\n
        + -- Nomenclatura: ${this.acomodacao.NomeAcomadacao.toString()}\n
        + -- Quantidade de leitos para solteiros: ${this.acomodacao.CamaSolteiro}\n
        + -- Quantidade de leitos para casais: ${this.acomodacao.CamaCasal}\n
        + -- Climatização: ${this.converterBooleano(this.acomodacao.Climatizacao)}\n
        + -- Quantidade de garagens disponíveis: ${this.acomodacao.Garagem}\n
        + -- Quantidade de suites: ${this.acomodacao.Suite}\n`
    
        return descricao
    }

    private converterBooleano(valor: Boolean) {
        if (valor) {
            return `sim`
        } else {
            return `não`
        }
    }
}