/* Script para o cálculo das operações matematicas:
    -soma
    -subtração
    -multiplicação
    -divisão
    -resto.
    Será necessario mais 2 variáveis para receber os números dos usuários 
    */


var numero1;
var numero2;

// para obter o número digitado pelo usuario usaremos o comando prompt(que um imput de dados)

numero1 = prompt ("Digite um Número","0");
numero2 = prompt ("Digite outro Número");
// Converter para inteiro com parseint
var soma = parseInt (numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

alert("os resultados das operações é:\n\n" +
     "\nsoma:  "+soma +
     "\nsubtração:  "+subtrair +
     "\nmultiplicação:  "+multiplicar+
     "\ndivisão:  "+dividir +
     "\nresto:  "+resto);

