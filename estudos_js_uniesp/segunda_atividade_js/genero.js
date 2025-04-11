/*Obtenha dados da altura e o gênero (Masculino ou Feminino) de 15 pessoas e apresente os seguintes resultados:

- A maior e a menor altura do grupo;
- A média de altura das pessoas do gênero Masculino;
- O número de pessoas do gênero Feminino.

Para o desenvolvimento da atividade o aluno deve utilizar, obrigatoriamente, a linguagem JavaScript.

Após o término da atividade, o aluno deve disponibilizar o link do seu github com a
resposta.*/



var alturas = [];

var altura_Masculino = [];

var contador_Feminino = 0;



for (var i = 0; i < 3; i++) {
    var altura = parseFloat(prompt(`Insira a altura da pessoa: ${i + 1} :`));
    var genero = prompt(`Insira o gênero da pessoa: ${i + 1} (Masculino/Feminino):`).toLowerCase();

   
    alturas.push(altura);

    
    if (genero === "masculino") {
        altura_Masculino.push(altura);
    }
    else if (genero === "feminino") {
        contador_Feminino++;
    }
    else {
        alert("Gênero inválido, insira Masculino ou Feminino.");
        i--; 
    }
}


let maiorAltura = Math.max(...alturas);
let menorAltura = Math.min(...alturas);


var mediaAlturaMasculino = altura_Masculino.length > 0 
    ? (altura_Masculino.reduce((soma, altura) => soma + altura, 0) / altura_Masculino.length).toFixed(2)
    : "Nenhum homem no grupo";


console.log(`Com base na pesquisa, a maior altura é: ${maiorAltura}metro.`);
console.log(`Com base na pesquisa, a menor altura é: ${menorAltura}metro.`);
console.log(`Com base na pesquisa, a média de altura de homens é: ${mediaAlturaMasculino}metro.`);
console.log(`Com base nas pesquisas, o número de mulher é: ${contador_Feminino} mulheres.`);






