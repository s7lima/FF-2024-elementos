function gerarTabuada () {
    let numero = document.querySelector("#num").value;

    let msgTabuada = ""
    for (let i = 1; i <= 10; i++ ) {
        msgTabuada += `${numero} X ${i} = ${numero * i} <br>`;
        
    }
    document.querySelector('#resultado').innerHTML = msgTabuada;


}

function perguntar() {
    let repetir = confirm("Deseja Gerar outra tabuada?");
    if (repetir) {
        document.querySelector('#resultado').innerHTML = ""; 
        document.querySelector('#num').value = ""; 
    } else {
        document.querySelector('#num').disabled = true; 
        document.querySelector('button').disabled = true; 
    }
}

document.querySelector('button')
.addEventListener('click', gerarTabuada)