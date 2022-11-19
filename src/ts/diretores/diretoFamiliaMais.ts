import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";

export default class DiretorFamiliaMais extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamiliaMais
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.CamaSolteiro = 5
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        objetoConstrutor.Suite = 2
        return objetoConstrutor.construir()
    }
}
