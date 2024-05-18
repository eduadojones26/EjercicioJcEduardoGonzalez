
// calculadora masa corporal

let calcular = document.getElementById("calcular");

calcular.addEventListener("click", function () {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value) / 100;
    let imc = 0;

    if (peso > 0 && altura > 0) {
        imc = peso / (altura * altura);
        document.getElementById('resultado').value = imc.toFixed(2);
    } else {
        alert('Por favor ingresa un peso y altura válidos.');
    }
});

// convertidor de divisas


let tasaCambio = 3880;

convertir.addEventListener("click", function () {
    let cantidad = parseFloat(document.getElementById('cantidad').value);
    let monedaOrigen = document.getElementById('monedaOrigen').value;
    let monedaDestino = document.getElementById('monedaDestino').value;
    let resultado;

    if (monedaOrigen === 'pesoColombiano' && monedaDestino === 'dolarAmericano') {
        resultado = cantidad / tasaCambio;
        document.getElementById('resultadoDivisa').value = resultado.toFixed(2);
    } else if (monedaOrigen === 'dolarAmericano' && monedaDestino === 'pesoColombiano') {
        resultado = cantidad * tasaCambio;
        document.getElementById('resultadoDivisa').value = resultado.toFixed(2);
    } else {
        alert('La conversión seleccionada no es posible, revisa que divisas quieres convertir.');
    }
})





