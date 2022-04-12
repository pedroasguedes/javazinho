/* Script para solicitação de cor ao
usuario quando o usuario digita a cor
desejada entao iremos mudar a cor de dundo boby
caso o ususario digite uma cor nao listada mudaremos a cor de fundo para uma
pre estabelecida e sera exubida uma mensagem ao usuario*/


var cor = prompt ("digite:\n\n"+
"1 - Preto"+
"\n2 - Amarelo"+
"\n3 - Azul"+
"\n4 - Vermelho");

if(cor == 1){
    document.body.style.backgroundColor="black"; 
}
else if (cor == 2){
    document.body.style.backgroundColor="yellow"; 
}

else if (cor == 3){
    document.body.style.backgroundColor="blue"; 
}

else if (cor == 4){
    document.body.style.backgroundColor="red"; 
}

else{
    document.body.style.backgroundColor="teal";
    alert("Você digitou uma opção errada vagabundo")
}