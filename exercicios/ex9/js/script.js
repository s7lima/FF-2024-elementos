function verificarEntrada() {
    let idade = parseFloat(document.querySelector('#idade').value);
    let altura = parseFloat(document.querySelector('#altura').value);

    let resultado ="";

    if ((altura >= 1.70) || (altura >= 1.60) && (idade >= 18)) {
        resultado = "Pode passar"
    } else {
        resultado = "Não pode passar"
    }
        
    let h1 = document.querySelector("h1");
    h1.innerHTML = resultado;
    
}

document.querySelector('.btn').addEventListener('click', verificarEntrada);

