function calcular() {
    let numero1 = parseFloat(document.querySelector('#num1').value);
    let numero2 = parseFloat(document.querySelector('#num2').value);
    let operador = document.querySelector("#calc").value;

    switch (operador) {
        case "soma":
            document.querySelector('h2').innerHTML = `A soma é ${numero1 + numero2}`;
            break;
        case "subtracao":
            document.querySelector('h2').innerHTML = `A subtração é ${numero1 - numero2}`;
            break;
        case "multiplicacao":
            document.querySelector('h2').innerHTML = `A multiplicacao é ${numero1 * numero2}`
            break;
        case "divisao":
            if (numero2 == 0) {
            document.querySelector('h2').innerHTML = `Não pode ser dividido por 0}`;
            } else {
                document.querySelector('h2').innerHTML = `A divisão é ${numero1 / numero2}`
            }
            break;
        case "potenciacao":
            document.querySelector('h2').innerHTML = `A potenciação é ${numero1 ** numero2}`
            break;
        case "radiciacao":
            document.querySelector('h2').innerHTML = `A Raiz de ${numero1} é ${numero1 ** (1/numero2)}`
            break;
        
    }
}
document.querySelector('button')
        .addEventListener('click', calcular);