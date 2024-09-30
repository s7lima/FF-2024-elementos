// exemplo anterior so olhar nos commits ateriores

// Funções para eventos
function aoClicar (){
    alert('Você clicou no Botão');
}
function aoPerderFoco(){
    alert('Você saiu do campo!');
}

// Selecionando o elemento usando querySelector
let campo = document.querySelector('#meuCampo');
let botao = document.querySelector('.btnCampo');

// Adicionando os eventos 
campo.addEventListener('blur', aoPerderFoco);
botao.addEventListener('click', aoClicar);