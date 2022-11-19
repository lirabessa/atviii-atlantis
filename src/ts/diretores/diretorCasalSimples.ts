import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";

export default class DiretorCasalSimples extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.CasalSimples
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.CamaSolteiro = 0
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 1
        objetoConstrutor.Suite = 1
        return objetoConstrutor.construir()
    }
}