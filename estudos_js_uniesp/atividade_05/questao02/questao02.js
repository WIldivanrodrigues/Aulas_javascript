let listaNumeros = [];

let pares = [];

let impares = [];

for (let i = 0; i < 10; i++){

    let numero = parseInt(prompt('Insira o ' + (i + 1) + '° número inteiro: '));
    if (isNaN(numero)){
        alert('Insira um número válido!');
        i --; 
    }
    else{
        listaNumeros.push(numero);
        
        if(numero % 2 == 0){
            pares.push(numero);
        }
        else{
        impares.push(numero);
        }
    }
}
alert('Nuymeros inseridos na lista:' + listaNumeros.join(", "));
alert('Numeros pares na lista: ' + pares.join(", ") +' (' + pares.length + ' número(s)).') 
alert('Numeros impares presentes na lista: ' + impares.join(", ") + ' (' +impares.length +  ' numero(s)).')

