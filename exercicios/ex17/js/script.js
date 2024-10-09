function gerarTabuada() {
    let numero = parseFloat(document.querySelector('#numero').value);

    if (isNaN(numero) || numero === "") {
        alert("Número Inválido!");
        document.querySelector('#numero').value = "";
    } else {
        let corpoTabela = document.querySelector('#corpo-tabela');
        corpoTabela.innerHTML = ""; // Limpa a tabela antes de adicionar novos resultados

        for (let i = 1; i <= 50; i++) {
            let unidade = i === 1 ? "pão" : "pães";
            let linhaTabela = `<tr><td>${i} ${unidade}</td><td>R$ ${(numero * i).toFixed(2)}</td></tr>`;
            corpoTabela.innerHTML += linhaTabela;
        }

        document.querySelector('#tabela-resultados').style.display = "table";
        document.querySelector('#numero').disabled = true;
        document.querySelector('.btn').disabled = true;
    }
}

document
    .querySelector('.btn')
    .addEventListener('click', gerarTabuada);