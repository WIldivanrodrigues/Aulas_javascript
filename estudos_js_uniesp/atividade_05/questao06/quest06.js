function calculaInvest() {
    let capital = Number(prompt("Informe o valor inicial do investimento em reais: "));

    let taxa = Number(prompt("Insira a porcentagem (%) de juros: "));

    let tempo = Number(prompt("Informe a quantidade de meses do investimento: "));

    if (isNaN(capital) || capital <= 0 || isNaN(taxa) || taxa < 0 || isNaN(tempo) || tempo <= 0) {
        alert("Por favor, insira valores acima de zero.");
    } else {
        let i = taxa / 100; 
        let montante = capital * Math.pow(1 + i, tempo);

        alert(
            "Baseado nas informações inseridas, o retorno do seu investimento será: \n" +
            "R$ " + montante.toFixed(2) + " reais."
        );
    }
}


calculaInvest();
