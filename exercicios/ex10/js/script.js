function exibirMaior() {
    let produto1 = document.querySelector("#prod1").value;
    let produto2 = document.querySelector("#prod2").value;
    let produto3 = document.querySelector("#prod3").value;

    let valor1 = parseFloat(document.querySelector("#valor1").value);
    let valor2 = parseFloat(document.querySelector("#valor2").value);
    let valor3 = parseFloat(document.querySelector("#valor3").value);

    // Exibir apenas o menor
    // resultado = "";
    // let menor = Math.min(valor1, valor2, valor3); 
    // resultado = `${menor}`
    // document.querySelector("#resultado").innerHTML =resultado;

    // Exibir resultado com nome!!!
    let resultado = "";
    if ((valor1 <= valor2) && (valor1 <= valor3))
        resultado = ` ${produto1}, custa R$ ${valor1} é o menor valor!`
    else if ((valor2 <= valor1) && (valor2 <= valor3))
        resultado = `  ${produto2}, custa R$ ${valor2} é o menor valor!`
    else
        resultado = `${produto3}, custa R$ ${valor3} é menor valor!`
    document.querySelector("#resultado").innerHTML = resultado;
}
 
document.querySelector(".btn").addEventListener('click', exibirMaior);