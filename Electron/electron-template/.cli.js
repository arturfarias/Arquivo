const program = require('commander');
const chalk = require('chalk');
const fs = require('fs');

program.version("1.0.0");

commandList = ["page"];

function makeDir(path){
    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
        return true;
    }
    else{
        return false;
    }
};

function makeFile(path,name,content){
    fs.writeFile(`${path}/${name}`,`${content}`, (err) =>{
      if(err){
            return false
        }
        return true
    });
};


function makePage(name){
    let path = `${__dirname}/pages/${name}`
    let template = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
        <meta http-equiv="X-Content-Security-Policy" content="default-src 'self'; script-src 'self'">
        <link rel="stylesheet" href="../../static/photon/css/photon.css">
        <!--<script src="../../static/photon/template-app/app.js" charset="utf-8"></script> -->
        <link rel="stylesheet" href="./${name}.css">
        <!-- <title>${name}</title> -->
      </head>
      <body>
    
        <script src="./${name}.js"></script>
      </body>
    </html>`

    if(makeDir(path)){
        makeFile(path,`${name}.html`,template);
        makeFile(path,`${name}.css`,"");
        makeFile(path,`${name}.js`,"");
        console.log(chalk.green(`page ${name} was successfully created`));
        
    } else{
        console.log(chalk.red(`There is already a directory named with this name in the project!`));
    }

};

program
    .command('command <option> <value>')
    .description('criar um novo diretorio de paginas')
    .action((option,value) => {
        if(!commandList.includes(option)){
            console.log(`${chalk.red(`${option} It is not a valid command, use one of the following commands: ${chalk.blue(commandList)}`)}`);
        }

        if(option == commandList[0]){
            makePage(value)
        }
    });

program.parse(process.argv);