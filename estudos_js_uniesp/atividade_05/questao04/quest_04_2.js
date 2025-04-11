let salarioInicial = parseFloat(prompt("Digite o seu salário inicial: "));

if (!isNaN(salarioInicial) && salarioInicial > 0) {
    let salario = salarioInicial;
    
    let aumento = 0.0015; 
    
    let anoAtual = new Date().getFullYear();
    let ano = 1996;
    while ( ano <= anoAtual) {
        salario += salario * aumento;
        aumento *= 2;
        ano++
    }

    alert(`Salário atual em ${anoAtual}: R$ ${salario.toFixed(2)}`);
} else {
    alert("Salário inicial inválido.");
}
