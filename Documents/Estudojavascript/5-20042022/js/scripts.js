// Objetos e coleções 
// vamos criar um coleção de nomes
var nomes = ["Paula" , "Henrique", "Vanessa"];

// usando
for (var i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

// outra forma de ler coleções e usando interadores,neste caso, voce pode usar foreach ou map
// nomes.forEach()...
// nomes.map()...

nomes.forEach(saida);



function saida(valor,indice){
    console.log("do foreach ->" + valor);
}

// variação do foreach com a função dentro da estrutura
nomes.forEach(function(valor,indice){
console.log(valor)
})

// variação do foreach com arrow function
nomes.forEach((valor,indice)=>{
console.log("Arrow Function ->" + valor);
});


// ----------------------------- Map ----------------------------
nomes.map((valor,indice)=>{
console.log ("Posição:" + indice + "Nome:" +valor)
});


// Vamos criar um objeto chamado cliente
//  para a definição dos dados do cliente é importante
// que estes fiquem entre chaves.
// esta estrutura e do tipo chave - valor.
const endereco = {
tipo: "Rua",
logradouro: "Soldado Fernandes",
numero:"73",
complemento:"Barracão",
bairro: "jardim Novo",
}
const cliente = {
id:1,
nome: "Paula de Oliveira",
idade: 25,
cpf: "22343245",
end:endereco
};

const prodcalca={
id:1,
nome:"Calça jeans",
preco:"R$ 150.00"
};
const prodblusa={
    id:1,
    nome:"Blusa de lã",
    preco:"R$ 50.00"
    };


    const prodtenis={
        id:1,
        nome:"Tenis Jordan",
        preco:"R$ 750.00"
        };

const pedido={
id:5514,
data:"15/06/2023",
hora:"15:00",
cliente:cliente,
produtos:[prodblusa,prodcalca,prodtenis],
entrega:endereco
}

console.log("Saida do objeto cliente")
console.log(pedido);


const out = document.getElementById("output");
out.innerHTML += `Id do Pedido: ${pedido.id} `;
out.innerHTML += `<br><br>Nome do cliente: ${pedido.cliente.nome}`;
pedido.produtos.map((pr,ix)=>{
out.innerHTML += `<br><br>Pedido do Cliente: ${pr.nome}`
});
out.innerHTML += `<br><br>Entregar em: ${pedido.entrega.logradouro}`;

