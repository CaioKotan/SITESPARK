
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
onc();