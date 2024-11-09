
// Adiciona um evento de clique ao botão
const caminhoAtual = window.location.pathname;
// Extrai apenas o nome do arquivo a partir do caminho completo
const nomeDoArquivo = caminhoAtual.substring(caminhoAtual.lastIndexOf('/') + 1);

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

if(localStorage.getItem("useraut")=="true"){
    console.log("logged");
    btn=document.getElementById("loginbtn")
    if(btn){
        btn.remove();
        const novoItem = document.createElement("li");
        const novoLink = document.createElement("a");
        novoLink.textContent = "PERFIL";
        novoLink.setAttribute("onclick", "changemenuv()");
        novoItem.appendChild(novoLink);
        const lista = document.getElementById("navbarul");
        novoLink.classList.add("perfilbtn");
        lista.appendChild(novoItem);
        let nomemenuv = document.getElementById("nomemenuv");
        nomemenuv.innerHTML=localStorage.getItem("userautname");
    }
}
function autsair(){
    localStorage.removeItem("useraut");
    localStorage.removeItem("userautname");
    localStorage.removeItem("userautpass");
    location.reload();
}
function autstatus(){
    location.href="STATUS.html";
}
console.log(localStorage.getItem("useraut"));
console.log(localStorage.getItem("userautname"));