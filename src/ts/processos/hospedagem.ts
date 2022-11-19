import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorAcomodacao from "../impressores/impressorAcomodacao";
import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import ListagemAcomodacoes from "./listagemAcomodacoes";

export default class Hospedagem extends Processo{
    private listaTitular: Cliente[]
    private acomodacoes!: Acomodacao[]
    private impressor!: Impressor
    constructor(){
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.listaTitular = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        let numero = this.entrada.receberTexto ('Qual número do documento do Titular? ')
        let titular = this.listaTitular.find(titular => titular.Documentos.find(documento => documento.Numero == numero))
        console.log(titular?.Nome);

        if(titular){
            this.processo = new ListagemAcomodacoes()
            this.processo.processar()
            let idAcomodacao = this.entrada.receberNumero('Qual o ID da acomodação?')
            let acomodacao = this.acomodacoes[idAcomodacao]
            titular.Acomodacao = acomodacao           
        }
    }
}