//requisição do prompt

var prompt = require('prompt-sync')();

//capturando o nome do usuário

let nome = prompt("Olá, como é seu nome? ");

//hisória

console.log();

console.log("Estamos investigando um caso de assassinato que ocorreu na madrugada da noite anterior, vamos fazer algumas perguntas para você, " + nome + ". Digite sim ou nao.");

console.log();

//perguntas

let p1 =  prompt("Você estava no local do crime? ");
let p2 =  prompt("Você viu a vitima no dia do crime? ");
let p3 =  prompt("Você não se dava bem com a vitima? ");
let p4 =  prompt("Você já brigou com a vitima? ");
let p5 =  prompt("Você já viu a arma do crime antes? ");

//contagem de "sim"

let dados

if (p1 == 'sim' || p1 =='Sim') {
    dados = 1;
}
if (p2 == 'sim' || p2 =='Sim') {
    dados = dados + 1;
}
if (p3 == 'sim' || p3 =='Sim') {
    dados = dados + 1;
}
if (p4 == 'sim' || p4 =='Sim') {
    dados = dados + 1;
}
if (p5 == 'sim' || p5 =='Sim') {
    dados = dados + 1;
}

//testando as perguntas

console.log();

if (dados <= 2) {
    console.log('Você é inocente.');
} else if (dados == 3) {
    console.log('Você é suspeito');
} else {
    console.log('Você é culpado!');
}