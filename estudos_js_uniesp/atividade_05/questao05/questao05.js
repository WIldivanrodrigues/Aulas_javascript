let raio = Number(prompt('Insira o raio do círculo: '));

if (isNaN(raio) || raio <= 0){

    alert("Insira o valor válido ou maior que zero.")
}
else{
    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2* Math.PI * raio;

    alert ('Raio do círculo: ' + raio);
    alert('Área do cículo: ' + area.toFixed(2));
    alert('Circunferência do círculo: ' + perimetro.toFixed(2));

}







