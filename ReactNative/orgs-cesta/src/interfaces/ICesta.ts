interface ITopo  {
    titulo: string
};

interface IDetalhes  {
    nome: string,
    logo: any,
    nomeFazenda: string,
    descricao: string,
    preco: string,
    botao: string,
};

interface IItem {
    nome: string,
    imagem: any,
};

interface IItens {
    titulo: string,
    lista: IItem[],
};

interface ICesta  {
    topo: ITopo,
    detalhes: IDetalhes,
    itens: IItens

};

export { ITopo, IDetalhes, ICesta, IItens, IItem};