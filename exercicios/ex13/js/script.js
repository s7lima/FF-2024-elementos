function calcular() {
    let temperatura = parseFloat(document.querySelector('#temperatura').value);
    let converter = document.querySelector("#operador").value;

    switch (converter) {
        case "C":
            document.querySelector('h2').innerHTML = `A temperatura em Celsius é ${((temperatura - 32) * 5/9) }`;
            break;
        case "F":
            document.querySelector('h2').innerHTML = `A temperatura em Fahrenheit é ${((temperatura * 9/5) + 32)}`;
            break;
        
    }
}
document.querySelector('button')
        .addEventListener('click', calcular);