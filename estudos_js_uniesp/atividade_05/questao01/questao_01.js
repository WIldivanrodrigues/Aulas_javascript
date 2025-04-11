function calcularTotal(precoUnitario, quantidade){

return precoUnitario*quantidade;
}

function aplicarDesconto(valorTotal){
    if(valorTotal > 100){
        return valorTotal * 0.90;
    }else {
        return valorTotal;
    }




}
function Resumo() {
    console.log("ValorTotal: R$" + valorTotal.toFixed(2));
    console.log("Valor com desconto: R$" + valorFinal.toFixed(2));
}


var precoUnitario = parseFloat(prompt("Digite o preço da unidade do produto:"));
var quantidade = parseInt(prompt("Digite a quantidade Que será comprada:"));


var valorTotal = calcularTotal(precoUnitario, quantidade);


var valorFinal = aplicarDesconto(valorTotal);


Resumo(valorTotal, valorFinal);





