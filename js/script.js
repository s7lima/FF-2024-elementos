// Selecionado div pelo id
let div = document.getElementById('meuDiv');
console.log(meuDiv);

// Selecionando todos so parágrafos com a classe "parágrafo"
let paragrafos = document.getElementsByClassName('paragrafo');
console.log(paragrafos)

// Selecionando o primeiro parágrafo com a classe "paragrafo"
let primeiroParagrafo = document.querySelector('.paragrafo');
console.log(primeiroParagrafo)

// Selecionando todos os parágrafos dentro do div 
let paragrafoDentroDiv = document.querySelectorAll('#meuDiv p');
console.log(paragrafoDentroDiv)
