/*
Faça um algoritmo que leia um número inteiro menor 
que 1000 e imprima a quantidade de 
centenas, dezenas e unidades do mesmo. 
Observando os termos no plural a colocação do "e", 
da vírgula entre outros.
Exemplo: 326:  3 centenas, 2 dezenas e 6 unidades.
*/

function gerarResultado() {
    let numero = parseInt(document.querySelector('#numero').value);
    if (numero < 1 || numero >= 1000)
        alert("Operação Inválida!");
    
    else {
        let centenas = parseInt(numero / 100);
        let dezenas = parseInt((numero % 100) / 10);
        let unidades = numero % 10;
        let txtResultado = "";
        //--------------CENTENAS ----------------
        if (centenas > 1)
            txtResultado = `${centenas} centenas`;
        else if (centenas == 1)
            txtResultado = `${centenas} centena`;
        //--------------DEZENAS ----------------
        if (dezenas > 1) {
            if (txtResultado !== '') {
                if (unidades == 0)
                    txtResultado = `${txtResultado} e ${dezenas} dezenas.`
                else
                    txtResultado = `${txtResultado}, ${dezenas} dezenas`
            } else
                txtResultado = `${dezenas} dezenas`
        } else if (dezenas == 1) {
            if (txtResultado !== '') {
                if (unidades == 0)
                    txtResultado = `${txtResultado} e 1 dezena.`
                else
                    txtResultado = `${txtResultado}, 1 dezena`
            } else
                txtResultado = `${dezenas} dezena`
        }
        //-------------- UNIDADES ----------------
        if (unidades > 1) {
            if (txtResultado !== '')
                txtResultado = `${txtResultado} e ${unidades} unidades.`
            else
                txtResultado = `${unidades} unidades`
        } else if (unidades == 1) {
            if (txtResultado !== '')
                txtResultado = `${txtResultado} e 1 unidade.`
            else
                txtResultado = `1 unidade.`
        }
        document.querySelector('section>h2').innerHTML = txtResultado;
    }
}
document
    .querySelector('.btn-success')
    .addEventListener('click', gerarResultado);