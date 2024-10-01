function somar() {
    let nota1 = document.querySelector('.nota1').value;
    let nota2 = document.querySelector('.nota2').value;
    let nota3 = document.querySelector('.nota3').value;
    let nota4 = document.querySelector('.nota4').value;
    
    nota1 = parseInt(numero1);
    nota2 = parseInt(numero2);
    nota3 = parseInt(numero3);
    nota4 = parseInt(numero4);

    let soma = nota1 + nota2 + nota3 + nota4;

    pResulado = document.querySelector("#resultado");

    pResulado.innerHTML = `${nota1} + ${nota2} + ${nota3} + ${nota4}  = ${soma}`;
}

let botao = document.querySelector("button");
botao.addEventListener('click', somar);
