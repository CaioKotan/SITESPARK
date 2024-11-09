
// Adiciona um evento de clique ao botão
const caminhoAtual = window.location.pathname;
// Extrai apenas o nome do arquivo a partir do caminho completo
const nomeDoArquivo = caminhoAtual.substring(caminhoAtual.lastIndexOf('/') + 1);
let admlocal="";

console.log(nomeDoArquivo);

function sc(x) {
    // Rola a página para baixo 500 pixels
    if(nomeDoArquivo!="index.html"){
        location.href="index.html";
    }
    window.scrollTo({
        top: (window.innerHeight*x), // distância para rolar (pode ajustar conforme necessário)
        left: 0, // não rolar para os lados
        behavior: 'smooth' // rolagem suave
    });
};
function AAAAAA1(lk){
    location.href=lk;
}
function changemenuv(){
    const menuv = document.getElementById("menuv");
    if(menuv.style.display=="flex"){
        menuv.style.display="none";
    }else{
        menuv.style.display="flex";
    }
}
function onread(){
    const name=document.getElementById("username");
    name.innerHTML=("NOME: "+localStorage.getItem("userautname"));
    const senha=document.getElementById("userpass");
    let cs="";
    for(let i in localStorage.getItem("userautpass")){
        cs=cs+"*"
    }
    senha.innerHTML=("SENHA: "+cs);
    const adm=document.getElementById("useradm");
    if(localStorage.getItem("userautadm")=="true"){
        adm.innerHTML=("ADM: "+"✅");
    }else{
        adm.innerHTML=("ADM: "+"❌");
    }
}
onread();
console.log(localStorage.getItem("userautadm"))