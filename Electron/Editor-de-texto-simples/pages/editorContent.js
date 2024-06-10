//const file = new custom.File();

let editor = document.getElementById("editor");
let lines = document.getElementById("lines");
let indexBody = document.getElementsByTagName("body")[0];
let footer = document.getElementById("footer");

function putFooter(){
    let wordsNumber = editor.innerText.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim().split(" ").length
    let charactersNumber = editor.textContent.length;

    footer.innerHTML = `<div class="info"> <b>Caracteres: ${charactersNumber}</b></div>
    <div class="info" > <b>Palavras: ${charactersNumber == 0 && wordsNumber == 1 ? 0 : wordsNumber}</b> </div>`;
};

editor.oninput = putFooter

indexBody.onclick = ()=>{
    editor.focus();
};

window.onresize = ()=>{
    editor.style.minHeight = `${window.innerHeight - 80}px`
    editor.style.maxHeight = `${window.innerHeight -80}px`
}
editor.focus();
putFooter()