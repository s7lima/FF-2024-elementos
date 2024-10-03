let turnoEscola = `Escolha um turno que você estuda:
                M - matutino
                V - vespertino
                N - noturno`

let turno = document.querySelector("#turno").value;

resultado =""

switch (turno) {
    case m:
        resultado = "Matutino"
        break;
    case v:
        resultado = "Vespertino"
        break;
    case n:
        resultado = "Noturno"
        break;

    default:
        resultado = "Invalido"
        break;

}

let h1 = document.querySelector("h1");
    h1.innerHTML = resultado;

document.querySelector('.btn').addEventListener('click', verificarEntrada);
