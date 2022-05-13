import {useState} from "react";
function App() {
const [produto, setProduto] = useState(
  [
    {
      id:500,
      nome:"Mouse",
      categoria:"Informática",
      preco:50.50
    },
    {
      id:501,
      nome:"teclado",
      categoria:"informática",
      preco:150.90
    }
  ]
);
console.log(produto);
return(
<div> 
  <button 
  onClick={()=>{
    let id = prompt("Entre com o id do produto");
let nome = prompt("Entre com o nome do produto");
let categoria = prompt("Entre com o categoria do produto");
let preco = prompt("Entre com o preço do produto");
    
   setProduto(
     produto.concat({
       id: id,
       nome: nome,
       categoria: categoria,
       preco: preco,
}
     );
 }>
Adicionar Produto
  </button>

<h2>Produtos Cadastrados</h2>

{produto.map((item,index) =>(

<div key={index}>
  <h3>{item.nome}</h3>
  <ul>
    <li>Código Do Produto {item.id}</li>
    <li>Categoria Do Produto {item.categoria}</li>
    <li>Preço Do Produto {item.preco}</li>
  </ul>
</div>
))};

</div>
);
}
export default App;
