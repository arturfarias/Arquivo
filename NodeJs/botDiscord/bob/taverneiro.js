function GetBebida(texto){
    if(texto.match(/para/)){
        return texto.slice(texto.search(/de /) + 3,texto.search(/para/)-1);
    }
    return texto.slice(texto.search(/de /) + 3);;
};

function GetAutor(texto,autor){
    if(texto.match(/para/) && texto.search(/</) != -1){
        return texto.slice(texto.search(/</))
    }
    return autor
};

class Taverneiro{
    constructor(){

    };

    bebida({content,author}){
        let mensagens = {
            "ingran" : `:tea: Um copo de chá de sumiço para `,
            "lucian" : `:imp: Um copo de trevas liquida para `,
            "luana" : `:gift_heart: Um copo de fofura para `,
            "inoue" : `:red_car: Um brinquedo do relampago marquinhos para `,
        };
        let bebida = GetBebida(content);
        let autor = GetAutor(content,author);

        if(bebida.toLowerCase() in mensagens){
            return mensagens[bebida.toLowerCase()] + autor;
        };
        return `:beer: Um copo de ${bebida} para ${autor}`;
    };

};

module.exports = {
    Taverneiro: Taverneiro
};