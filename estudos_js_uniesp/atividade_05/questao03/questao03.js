

let usuario = parseInt(prompt('Quantos números você deseja inserir ?'))

if (usuario > 0){
    let numeros = [];

    for (let i = 0; i < usuario;){
        let num = parseInt(prompt('Digite o ' + (i + 1) + '° número: ' ));
        if(!isNaN(num)){
            numeros.push(num);
            i++;
        }
        else{
            alert("Número inválido, insira um número correto!");
        }
    }

const maiorNumero = Math.max(...numeros);
const menorNumero = Math.min(...numeros);
const soma = numeros.reduce(function(a,b){
    return a + b;
}, 0);

    alert('numeros da lista: '+ numeros.join(", "));

    alert('menor numero da lista:  '+ menorNumero);  

    alert('Maior número da lista: ' + maiorNumero);

    alert('Soma dos numeros: ' + soma);  


}else{
    alert("Quantida inválida!")
}






