const {Menu} = require('electron');

const template = Menu.buildFromTemplate([
	{ label: 'Copiar', role: 'copy' },
    { label: 'Colar', role: 'paste' },
    { type: 'separator' },
    { label: 'Recortar', role: 'cut' },
    { label: 'Deletar', role: 'delete' },
    { type: 'separator' },
    { label: 'Selecionar', role: 'selectAll' },
    { type: 'separator' },
    { label: 'Desfazer',role: 'undo' },
    { label: 'Refazer', role: 'redo' },
  ]);

  module.exports = template;
