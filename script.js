// Adiciona um evento de clique ao botão
function sc(x) {
    // Rola a página para baixo 500 pixels
    window.scrollTo({
        top: (window.innerHeight*x), // distância para rolar (pode ajustar conforme necessário)
        left: 0, // não rolar para os lados
        behavior: 'smooth' // rolagem suave
    });
};

setInterval(() => {
    const nav=document.getElementById("nav");
    const documentHeight = document.documentElement.scrollHeight;
    const navb1=document.getElementById("nb1");
    const navb2=document.getElementById("nb2");
    const navb3=document.getElementById("nb3");
    const navb4=document.getElementById("nb4");
    const navb5=document.getElementById("nb5");

    // Obtém a altura visível da janela
    const windowHeight = window.innerHeight;
    
    // Obtém a posição atual de rolagem
    const scrollTop = window.scrollY;
    
    // Calcula a porcentagem da rolagem vertical
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    if(scrollPercent.toFixed(2)>49.99){
        nav.classList.remove("navbar2dc")
        nav.classList.add("navbar2")
        navb1.disabled=false;
        navb2.disabled=false;
        navb3.disabled=false;
        navb4.disabled=false;
        navb5.disabled=false;
    }else{
        nav.classList.add("navbar2dc")
        nav.classList.remove("navbar2")
        navb1.disabled=true;
        navb2.disabled=true;
        navb3.disabled=true;
        navb4.disabled=true;
        navb5.disabled=true;
    }

    console.log("Porcentagem da rolagem vertical:", scrollPercent.toFixed(2) + "%");
}, 10);