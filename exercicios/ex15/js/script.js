function verificarUsuarioSenha() {
    let usuario = document.querySelector('#usuario').value;
    let senha = document.querySelector("#senha").value;

    if (usuario === senha) {
        alert("A senha não deve ser igual ao login!")
        document.querySelector('#nome').value = "";
        document.querySelector("#senha").value = "";
    } else {
        alert("Logado com sucesso!")
    }
    
    }


document.querySelector('button')
.addEventListener('click', verificarUsuarioSenha);
