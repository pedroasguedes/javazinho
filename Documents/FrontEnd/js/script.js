function carregarDados(){

fetch("http://localhost:5000/api/cliente/listar")
    .then((resultado) => resultado.json())
    .then((dados) =>{
        dados.output.map((item)=>{
            var div =`<div id=item>
            <h2>${item.nome}</h2>
            <h3>${item.email}</h3>
            <h3>${item.telefone}</h3>
            <h3>${item.cidade}</h3>
            </div>
            `;
           document.getElementsByTagName("main")[0].innerHTML +=div; 
        })
    })
}
function cadastrar(){

    let nome = document.getElementsByTagName("input")[0];
    let email = document.getElementsByTagName("input")[1];
    let telefone = document.getElementsByTagName("input")[2];
    let cidade = document.getElementsByTagName("input")[3];

    fetch("http://localhost:5000/api/cliente/cadastrar",{
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome:nome.value,
            email:email.value,
            telefone:telefone.value,
            cidade:cidade.value,
        }),
    })
    .then((resultado)=>resultado.json())
    .then((dados)=>{
        alert(`${dados.output}\n ${dados.patload}`);
        // limpar o formulario
        nome.value="";
        email.value="";
        telefone.value="";
        cidade.value="";
    })
    .catch((err)=>console.error(err));
    window.location.reload();
}
function tela_cadastro(){
    document.getElementsByTagName("section")[0].style.marginTop="-300px";
    document.getElementsByTagName("section")[0].style.boxShadow="0px 0px 0px 100vw rgba(0,0,0,0.8)";
}
