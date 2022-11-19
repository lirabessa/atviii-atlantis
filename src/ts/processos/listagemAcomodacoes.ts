import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorAcomodacao from "../impressores/impressorAcomodacao";
import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";

export default class ListagemAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    private impressor!: Impressor
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem das acomodações ofertadas...')
        console.log(`-------------------------------------------------`)
        console.log(this.acomodacoes);
        this.acomodacoes.forEach((acomodacao, id) => {
            this.impressor = new ImpressorAcomodacao(acomodacao)
            console.log(this.impressor.imprimir(id))
            console.log(`-------------------------------------------------`)
        })
    }
}