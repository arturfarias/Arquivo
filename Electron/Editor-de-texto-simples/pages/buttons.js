const dialog = new Dialog();

function command(command, value=window.getSelection()){
    document.execCommand(command, false, value);
};

function click(id,func){
	document.getElementById(id).onclick = func;
};

click("bold", ()=>{command("bold")});
click("italic", ()=>{command("italic")});
click("paragraph", ()=>{command("formatBlock",'<p>')});
click("superscript", ()=>{command("superscript")});
click("insertHorizontalRule", ()=>{command("insertHorizontalRule")});

click("justifyLeft", ()=>{command("justifyLeft")});
click("justifyRight", ()=>{command("justifyRight")});
click("justifyCenter", ()=>{command("justifyCenter")});

click("insertOrderedList", ()=>{command("insertOrderedList")});
click("insertUnorderedList", ()=>{command("insertUnorderedList")});

click("insertImage", ()=>{
    dialog.getImage().then((data)=>{
        command("insertImage",data);
    }).catch(()=>{});
});

click("font", ()=>{command("fontName",document.getElementById("font").value)});
click("fontSize", ()=>{command("fontSize",document.getElementById("fontSize").value)});
click("foreColor", ()=>{command("foreColor",document.getElementById("foreColor").value)});

document.getElementById("foreColor").onchange = ()=>{command("foreColor",document.getElementById("foreColor").value)};