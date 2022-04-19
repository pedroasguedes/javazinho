// Verificar qual a pagina que ira abrir esse arquivo
// javascript
// pega a url completa do navegador
var pagina = window.location;
console.log(pagina);
// vamos quebrar a url onde houver barra
pagina = pagina.href.split("/");
console.log(pagina);

// pegar o ultimo elemento do array pagina criado acima

pagina = pagina [pagina.length-1];
console.log(pagina);

if(pagina == "home.html"){

document.body.style.backgroundColor="rgb(150,150,150)";



/*
acessar a caixa (input) chamanda numeros,capturar esses numeros e utilizar a função
maior para encontrar o maior valor entre ele.
*/
// referenciar um elemento de input da tela home

const txtN = document.getElementById("txtN");
// aplicar um evento chamado onblur, ou seja,quando a caixa perder o foco

txtN.onblur = function(){
// vamos capturar o valor contido em txtN, ou seja,os numeros dentro
// desta caixa e alocar em um array
var valores = txtN.value.split(",");
alert(maior(valores));
    
}

}
if(pagina=="formulario.html"){
    document.body.style.backgroundColor="rgb(120,200,150)"
    const nome=document.getElementById("nome")
    const email=document.getElementById("email")
    const cpf=document.getElementById("cpf")
    const telefone=document.getElementById("telefone")

nome.onblur = () => {
    verificarVazio(nome.value);
};
email.onblur = () => {
    verificarVazio(email.value);
};
cpf.onblur = () => {
    verificarVazio(cpf.value);
};
telefone.onblur = () => {
    verificarVazio(telefone.value);
};
    
}
