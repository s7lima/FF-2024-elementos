function lerExibirResultado(params) {
    let nota1 = parseFloat(document.querySelector(".num1").value);
    let nota2 = parseFloat(document.querySelector(".num2").value);

    let media = (nota1 + nota2) / 2;

    let resultado = "";
    if(media < 5) {
        resultado = "Reprovado";
    }
    else if (media < 7) {
        resultado = "Recuperação";
    }
    else {
        resultado = "Aprovado";
    }

    let paragrafo = document.querySelector("#resultado");
    paragrafo.innerHTML = `O aluno de média ${media.toFixed(2)} esta ${resultado}`;

}

let botao = document.querySelector('button');
botao.addEventListener("click",lerExibirResultado);
