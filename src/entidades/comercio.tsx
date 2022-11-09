import { Categoria } from "./categoria";
export interface Comercio{
    nomeFantasia: string;
    endereco: string;
    telefone: string;
    isWhatsApp: boolean;
    email: string;
    categoria: Categoria;
}