import Construtor from "../interfaces/construtor";

export default abstract class Diretor<T>{
    protected construtor!: Construtor<T>
    public abstract construir(): T
}