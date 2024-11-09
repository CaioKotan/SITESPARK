function onc(){
    let nameinp=document.getElementById("nameinp").value;
    let passinp=document.getElementById("passinp").value;

    let aviso=document.getElementById("aviso");

    if(nameinp==""&&passinp!=""){
        aviso.innerHTML="insira seu nome";
    }else if(passinp==""&&nameinp!=""){
        aviso.innerHTML="insira sua senha";
    }else if(passinp==""&&nameinp==""){
        aviso.innerHTML="insira seu nome e senha";
    }else{
        aviso.innerHTML="";
        console.log(window.nv);
        console.log(window.nv.length);
        let objnameall=[];
        let objpassall=[];

        let autname="";
        let autpass="";

        let autindex=0;


        for(let i in window.nv){
            let objnames=(Object.values(window.nv[i]))[1]
            let objpass=(Object.values(window.nv[i]))[2]
            console.log(objnames);
            console.log(objpass);
            objnameall.push(objnames);
            objpassall.push(objpass);
            if(nameinp==objnames){
                autname=objnames;
                autpass=objpass;
                autindex=i;
            }
        }   
        if(nameinp==autname&&passinp==autpass){
            aviso.innerHTML="LOGADO"        
            localStorage.setItem("useraut", "true");
            localStorage.setItem("userautname", autname);
            localStorage.setItem("userautpass", autpass);
            let admlocal;
            admlocal = Object.values(window.nv[autindex]);
            localStorage.setItem("userautadm", admlocal[0]);
            location.href="index.html";
        }
    }
}
function onc2(){
    let nameinp2=document.getElementById("nameinp2").value;
    let passinp=document.getElementById("passinp2").value;
    let cpassinp=document.getElementById("cpassinp").value;
    let aviso=document.getElementById("aviso2");
    let objnameall=[];
    for(let i in window.nv){
        let objnames=(Object.values(window.nv[i]))[1]
        objnameall.push(objnames);
    }
    let backerror=0;
    console.log(window.nv);
    for(let i in objnameall){
        if(nameinp2==objnameall[i]){
            backerror=1;
        }
    }
    if(backerror==1){
        aviso.innerHTML="nome ja existe";
    }else{
        aviso.innerHTML="";
    }
    if(backerror!=1){
        if(passinp!=""&&nameinp2!=""){
            if(passinp==cpassinp){
                aviso.innerHTML="CADASTRO REALIZADO";
                window.actcadastro(nameinp2,passinp);
            }
        }
    }
}