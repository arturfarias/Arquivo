const { dialog } = require('electron').remote;

class Dialog{
    constructor(){
    };

    async getImage(){
        var data = dialog.showOpenDialogSync({ properties: ['openFile'] , filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }]})
        return data[0];
   };

    async getFile(){
        var data = dialog.showOpenDialogSync({ properties: ['openFile'] , filters: [{ name: 'File', extensions: ['txt'] }]})
        return data[0];
   };

    async saveFile(){
        var data = dialog.showSaveDialogSync({ title: "Salvar arquivo de texto", defaultPath : "file.txt", 
        	                                   filters :[ {name: 'txt', extensions: ['txt']}] })
        return data;
   };

       async about(){
        var data = dialog.showMessageBoxSync({type: "info", title: "Sobre",message : "Editor de texto versão 1.0.0 ", detail : `Editor de texto simples de codigo aberto desenvolvido em electron  com o intuito de treinar o conhecimento de programação.`})
        return data[0];
   };
};


window.Dialog= Dialog;
module.exports = Dialog