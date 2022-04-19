// Encontra o maior valor em uma array
function maior(numeros){

// Vamos transformar os numeros em numeros.
// realizado um parse
// para inteiro
for(var c = 0 ; c <numeros.length ; c++){
numeros[c] = parseInt(numeros[c]);
}


var m = numeros [0];
for( var i =1 ; i < numeros.length ; i++){
if (numeros[i] > m){
    m = numeros[i]
}
}
return m;
}
// encontra o menor valor em um array
function menor(numeros){
var m = numeros[0];
for (var i = 1 ; numeros.length ; i++){
if(numeros[i] < m){
    m = numeros[i]
}
}return m;    
}
// Verificar se um campo está vazio e alertar o ususario
function verificarVazio(controle){
if(controle == "" || controle ==null){
alert("O campo"+controle.id+"Não pode ser vazio");
controle.setFocus();
}
}
function dataHora(){
return (
    new Date().toLocaleDateString()+
  " - "+new Date().toLocaleTimeString()
);
}
