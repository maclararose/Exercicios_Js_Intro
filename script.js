//Parte B
console.log("Olá, Mundo!");

//Parte C
let idade = 26;
let nota = 9.5;
let pet = 'Mozão';
let nome = "Maria Clara";
let casada = true;
let filhos = null;
let fe = undefined;

console.log(typeof idade, typeof nota, typeof pet, typeof nome, typeof casada, typeof filhos, typeof fe);

// Parte D
let n = 1;
let txt1 = "teste" + n + 1;
let txt2 = "teste" + (n+1);

console.log(txt1);
console.log(txt2);

// Parte E
let a = 3;
let b = 6;
console.log(`A soma de ${a} com ${b} é: ${a+b}`);

// Parte F
let x = "100";
let y = "200";
console.log(`Resultado = ${x + y}`);
console.log(parseInt(x) + parseInt(y));

let nota2 = "9.5";
console.log(`A nota do aluno é ${parseFloat(nota2)}`);

let valor = 103.34
console.log(typeof valor);
String(valor);
console.log(typeof valor);

// Parte G

/*
Em JavaScript, valores "falsy" são aqueles que,
  quando avaliados em uma condição (if), resultam em false.

  Valores falsy principais:
  - false
  - 0
  - "" (string vazia)
  - null
  - undefined
  - NaN

  Qualquer outro valor é considerado "truthy".
*/

let saldo = 0;

if (saldo) {
  console.log("Saldo disponível");
} else {
  console.log("Sem saldo"); // falsy
}

saldo = 10

if (saldo) {
  console.log("Saldo disponível"); // truthy
} else {
  console.log("Sem saldo");
}

saldo = null;

if (saldo) {
  console.log("Saldo disponível");
} else {
  console.log("Sem saldo"); // falsy
}

saldo = "";

if (saldo) {
  console.log("Saldo disponível");
} else {
  console.log("Sem saldo"); // falsy
}

// Parte H

/*
    Operador ternário é uma forma curta de escrever if/else.
    Estrutura:
    condição ? valorSeVerdadeiro : valorSeFalso
*/

let temDesconto = true;
let precoFinal = temDesconto ? 15.00 : 20.00;
console.log(`Preço final ${precoFinal}`);

// Parte I

/*
  O break é fundamental.
  Sem ele, o switch continua executando os próximos cases
  mesmo que já tenha encontrado um correspondente.
*/

let acao = "enviar";

switch (acao) {
  case "preparar":
    console.log("Pedido em preparação");
    break;

  case "embalar":
    console.log("Pedido sendo embalado");
    break;

  case "enviar":
    console.log("Pedido enviado");
    break;

  default:
    console.log("Ação inválida");
}

