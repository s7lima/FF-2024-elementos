function calcularresultado() {
    let nome = document.querySelector('#nome').value;
    let valorHora = parseFloat(document.querySelector('#valorhora').value);
    let quantHora = parseFloat(document.querySelector('#quanthora').value);

    let resultado = valorHora * quantHora;

    document.querySelector("#resultado").innerHTML = 
    `O valor recebido do trabalhador ${nome} é  R$ ${resultado.toFixed(2)}`;
    
}

document.querySelector('.btn').addEventListener('click', calcularresultado);