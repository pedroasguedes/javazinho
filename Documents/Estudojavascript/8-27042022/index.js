// importação do módulo d express
const express = require('express');

// realizar a aplicação da função do express
// em uma variável de aplicativo
const app = express();

// permitir com que o servidor receba dados no formato json
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Bem Vindo!");
});

// criação de uma  lista de clientes
const clientes =[  
 {
        id:12,
        nome:"Jordan",
        idade:56, 
    },
    {
        id:45,
        nome:"Lebron",
        idade:37, 
    }

]
// rota para clientes
app.get('/api/cliente/listar', (req, res) => {
    res.status(200).send({output:clientes}); });

// cadastrar novos clientes
app.post('/api/cliente/cadastrar', (req, res) => {
clientes.push(req.body);
res.status(201).send({output:`Cliente cadastrado`});

})

app.listen(5000,() => console.log("http://localhost:5000"));