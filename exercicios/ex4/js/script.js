function exibirSemana() {
    let dsemana = document.querySelector("#diaSemana").value;
    let resultado = "";
    if (dsemana == "1") 
        resultado = "Domingo";
    else if (dsemana == "2")
        resultado = "Segunda-feira";
    else if (dsemana == "3")
        resultado = "Terça-feira";
    else if (dsemana == "4")
        resultado = "Quarta-feira";
    else if (dsemana == "5")
        resultado = "Quinta-feira";
    else if (dsemana == "6")
        resultado = "Sexta-feira";
    else 
        resultado = "Sábado";  

    let h1 = document.querySelector("h1");
    h1.innerHTML = resultado;
}

document.querySelector('button') 
.addEventListener('click', exibirSemana)