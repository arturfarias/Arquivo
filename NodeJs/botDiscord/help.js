const { RichEmbed } = require('discord.js');

const help = new RichEmbed()
.setTitle('Lista de serviços')
.setColor(0xFFFFFF)
.setDescription(`A seguir os comandos básicos que podem ser utilizados com o Taverneiro, os comandos são divididos em três categorias,bot (!), interação social (bob) e roleplay (rpg).
              
              **BOT**
              *!ping*: Teste de conexão com o servidor.
              *!roll expressão <Nome>*: rola em dados a expressão passada "Exemplo: 1d6+10"

              **Interação social**
              *bob um copo de <Algo>*: O taverneiro  entrega o que você pediu.
              *bob um copo de <Algo> para @alguem*: O taverneiro  entrega  algo para alguém.

              **Roleplay**
              Em desenvolvimento...

              `);

module.exports = help;