const loginBt = document.getElementById('botao-login');

function login(usuario, senha) {

    const usuarioValido = JSON.parse(localStorage.getItem(usuario));
    return usuarioValido && usuarioValido.senha === senha;
}

loginBt.addEventListener('click', () => {
    const emailLogin = document.querySelector('#emailLogin');
    const senhaLogin = document.querySelector('#senhaLogin');

    if (!emailLogin.value) {
        alert('O campo Email é obrigatório.');
        emailLogin.focus();
        return;
    }

    if (!senhaLogin.value) {
        alert('O campo Senha é obrigatório.');
        senhaLogin.focus();
        return;
    }

    const loginAprovado = login(emailLogin.value, senhaLogin.value);

     if (loginAprovado) {
        alert('Login realizado com sucesso.');
        location.href = './pages/home.html';
        return;
     }
     alert('Usuário ou senha incorretos.');
});
