const { RichEmbed } = require('discord.js');

function validarRolagem(lista){
    if(lista.length < 2){
        return null;
    };

    let dados = lista[1].match(/^([0-9]*?d[0-9]+|[0-9]*){1}([+-/*]([0-9]*?d[0-9]+|[0-9]*))*$/);
    let tamanho = lista.length;

    if(tamanho > 4 || dados == null || lista[1].match(/[/]0/) != null){
        return null;
    }
    else if(tamanho == 3){
        return {dados:lista[1], msg:lista[2]};
    }
    else if(tamanho == 2){
        return {dados:lista[1], msg: " "};
    }
};

function random(max) {
    return parseInt(Math.random() * (max) + 1);
  }

class Roller{
    constructor(){
        this.operações = /[+-/*]$/;
        this.erro = new RichEmbed().setTitle('Não é assim que se rola um dado :slight_frown: ')
                                   .setColor(0xFFFFFF)
                                   .setDescription(`Experimente algo no formato **!roll expressão 
                                                    <Nome>** para suas rolagens! Consulte !ajuda 
                                                    caso ainda tenha dúvidas.`);
        
        this.overflow = new RichEmbed().setTitle('Isso é maior do que posso rolar!!! :game_die: ** **')
                                   .setColor(0xFFFFFF)
                                   .setDescription(`Sua rolagem e tão grande que não cabe em uma 
                                                    única mensagem, você realmente precisa de algo 
                                                    assim?:thinking:`);
    };
    
    getRoll({author, content}){
        let entradas = validarRolagem(content.split(" "));

        if(entradas == null){
            return this.erro;
        };

        let valores = this.rolagemComum(entradas.dados);
        
        if(valores.length <= 2000){
            return new RichEmbed().setTitle(`${author.username} Rolou **${entradas.msg}**`)
            .setColor(0xFFFFFF)
            .setDescription(`${valores}`);
        };
        return this.overflow;
    };

    rolagemComum(dados){
        let tupla = "";

        let lista = this.formataTermos(this.separador(dados));

        for(let elemento of lista){
            if(elemento.match(/d/)){
                tupla += `(${this.gerarTuplaDeValores(elemento)})`;
            }  
            else if(elemento.match(this.operacoes)){
                tupla += ` ${elemento} `;
            }
            else{
                tupla += `${elemento}`;
            };
        };

        return `${tupla} = **${parseInt(eval(tupla))}**`;

    };

    separador(sequencia_de_termos){
        let termo = ""
        let lista_de_termos = [];

        for(let elemento of sequencia_de_termos){
            if(elemento.match(this.operações)){
                lista_de_termos.push(termo);
                lista_de_termos.push(elemento);
                termo="";
            }
            else{
                termo += elemento;
            };
        };

        lista_de_termos.push(termo);
        return lista_de_termos;
    };

    formataTermos(lista_de_termos){
        for(let termo of lista_de_termos){
            if(termo[0] == "d"){
                lista_de_termos[lista_de_termos.indexOf(termo)] = `1${termo}`;
            };
        };
    return lista_de_termos;
    };

    gerarTuplaDeValores(termo){
        let valores = termo.split("d");
        let dados = parseInt(valores[0]);
        let lados = parseInt(valores[1]);
        let resultados = "";
    
        for(let x = 0; x < dados; x++){
            resultados += String(random(lados));
            if(x != dados-1){
                resultados += " + ";
            };
        };
        return resultados;
    };

};


module.exports = {
    Roller: Roller
};