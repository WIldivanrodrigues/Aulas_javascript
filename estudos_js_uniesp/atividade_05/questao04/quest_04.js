let salario = 1000;
let ano = 1996;
let aumento = 0.0015; // 0,15% como fração
let anoAtual = new Date().getFullYear()

while (ano < anoAtual) {
    salario +=  salario * aumento;
    aumento *= 2;
    ano++;
}

alert(`Salário atual em ${anoAtual}: R$ ${salario.toFixed(2)} reais.`);


