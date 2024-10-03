function exibirTurno(params) {
    let turno = document.querySelector("#turno").value;

    resultado = ""
    matutino = "Bom-Dia!"
    vespertino = "Boa-Tarde!"
    noturno = "Boa-Noite!"
    invalido = "Valor Invalido!"

    if ((turno === "m") || (turno === "M")){
        resultado = ` ${matutino}`
    } else if ((turno === "v") || (turno === "V")){
        resultado = `  ${vespertino}`
    } else if ((turno === "n") || (turno === "N")){
        resultado = `  ${noturno}`
    } else {
        resultado = `${invalido}`
    }               
    document.querySelector("#resultado").innerHTML = resultado;
}

document.querySelector(".btn").addEventListener('click', exibirTurno);