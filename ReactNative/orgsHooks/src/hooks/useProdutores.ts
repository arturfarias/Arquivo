import { useState, useEffect } from "react";

import { carregaProdutores } from '../servicos/carregaDados';

interface ILista {
    nome: string,
    imagem: any,
    distancia: string,
    estrelas: number,
}

export default function useProdutores(){
    const [titulo, setTitulo] = useState<string>('');
    const [lista, setLista] = useState<ILista[]>([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    },[]);


    return [titulo, lista]
};