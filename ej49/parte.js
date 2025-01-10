function verificarNumero(numero) {
    if (isNaN(numero)) {
        throw new Error('Los argumentos deben ser números');
    }
}


function sumar() {
    const numero1 = parseFloat(document.getElementById('number1').value);
    const numero2 = parseFloat(document.getElementById('number2').value);
    const resultadoDiv = document.getElementById('result');

    try {
        verificarNumero(numero1);
        verificarNumero(numero2);

        const resultado = numero1 + numero2;
        resultadoDiv.innerHTML = `Resultado: ${resultado}`;
    } catch (error) {
        resultadoDiv.innerHTML = `Error: ${error.message}`;
    }
}


function restar() {
    const numero1 = parseFloat(document.getElementById('number1').value);
    const numero2 = parseFloat(document.getElementById('number2').value);
    const resultadoDiv = document.getElementById('result');

    try {
        verificarNumero(numero1);
        verificarNumero(numero2);

        const resultado = numero1 - numero2;
        resultadoDiv.innerHTML = `Resultado: ${resultado}`;
    } catch (error) {
        resultadoDiv.innerHTML = `Error: ${error.message}`;
    }
}