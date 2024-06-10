const fs = require("fs");

class File{
    constructor(){
    };

    async openFile(path){
    	        var data = fs.readFileSync(path,"utf-8");
        return data;
    };

    async saveFile(path,content){
    	fs.writeFileSync(path, content);
    };
};

module.exports = File;