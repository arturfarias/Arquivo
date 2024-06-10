const {Menu} = require('electron').remote;

const File = require('./model');
const Dialog = require('./dialog');

let file = new File();
let dialog = new Dialog();

const template = Menu.buildFromTemplate([
    { id: '1', label: 'Novo', click: ()=>{document.getElementById("editor").innerHTML = "";} },

    { id: '2', label: 'Salvar', click: ()=>{ 
    	dialog.saveFile().then((data)=>{file.saveFile(data, document.getElementById("editor").innerHTML).catch(()=>{});
   		})
	}},


    { id: '3', label: 'Imporar', click: ()=>{0
    	dialog.getFile().then((data)=>{
    		file.openFile(data).then((data)=>{
	            document.getElementById("editor").innerHTML = data;
	        });
    	}).catch(()=>{});
    }},


    { id: '4', label: 'Sobre', click: ()=>{dialog.about();} }
  ]);

Menu.setApplicationMenu(template);

module.exports = Menu;