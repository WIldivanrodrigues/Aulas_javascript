/*•Crie um array com 5 nomes e exiba o terceiro nome no console.
• ok Adicione um nome ao final e um no início do array.
•Remova o último nome e exiba o array atualizado.
•Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].
•Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]*/



let nomes = ["bruno", "will", "marcell","marcelo","glaucio"];


console.log(nomes[2])

nomes.push("joão");
nomes.unshift("Tayson");

console.log(nomes);

nomes.pop();
console.log(nomes); 

let numeros = [2,4,5,8];
console.log(numeros);

let numerosNovo = numeros.map(numeros => numeros*2);
console.log(numerosNovo);

let numeros_2 = [1, 3, 5, 7, 9];

let numeros_2_atualizado = numeros_2.filter(numeros_2 =>  numeros_2 > 5);
console.log(numeros_2_atualizado);





