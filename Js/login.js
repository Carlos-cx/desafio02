const loginBt = document.getElementById('botao-login');

function login(usuario, senha) {

    const usuarioValido = JSON.parse(localStorage.getItem(usuario));

    if (usuarioValido && usuarioValido.senha === senha) {
        alert('Login realizado com sucesso.');
        return true;
    }
    alert('Usuário ou senha incorretos.');
    return false;

}

loginBt.addEventListener('click', (event) => {
    const usuarioLogin = document.querySelector('#usuarioLogin').value;
    const senhaLogin = document.querySelector('#senhaLogin').value;
    const loginAprovado = login(usuarioLogin, senhaLogin);

     if (!loginAprovado) {
        event.preventDefault();
     }
});
