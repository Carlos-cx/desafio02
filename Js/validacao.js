const formularioInsricao = document.querySelector('.formulario-informacoes');

function validarNome() {
    const nome = document.getElementById("nome-completo-participante").value;
    const nomeFormatoValido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (nome.length < 6) {
        return false;
    }

    return nomeFormatoValido.test(nome);
}

function validarDataNascimento() {
    const dataNascimento = document.getElementById("data-nascimento-participante").value;

    if (!dataNascimento) {
        return false;
    }

    let dataNascimentoObj = new Date(dataNascimento);
    let hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimentoObj.getFullYear();

    let mesAtual = hoje.getMonth();
    let diaAtual = hoje.getDate();
    let mesNascimento = dataNascimentoObj.getMonth();
    let diaNascimento = dataNascimentoObj.getDate();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    let idadeMinima = 14;
    let idadeMaxima = 120;

    if (idade < idadeMinima) {
        return false;
    } else if (idade > idadeMaxima) {
        return false;
    }

    return true;
}

function validarCpf() {
    const cpf = document.getElementById("cpf-participante").value;
    const cpfFormatoValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    return cpfFormatoValido.test(cpf);
}

function validarTelefone() {
    const telefone = document.getElementById("telefone-participante").value;
    const telefoneFormatoValido = /^\(\d{2}\) ?\d{4,5}-\d{4}$/;

    return telefoneFormatoValido.test(telefone);
}

function validarEmail() {
    const email = document.getElementById("email-participante").value;
    const emailFormatoValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
        return false;
    }

    return emailFormatoValido.test(email);
}

function validarCep() {
    const cep = document.getElementById("cep").value;
    const cepFormatoValido = /^\d{5}-\d{3}$/;

    return cepFormatoValido.test(cep);
}

function validarEndereco() {
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    if (!rua || !numero || !cidade || !estado) {
        return false;
    }
    return true;
}

function validarTrilhas() {
    const trilhas = document.getElementsByName("opcao");

    for (let opcaoTrilha of trilhas) {
        if (opcaoTrilha.checked) {
            return true;
        }
    }

    return false;
}

function validarTermoCompromisso() {
    const termos = document.getElementById("termos");

    if (termos.checked) {
        return true;
    }

    return false;
}

function validarUsuario() {
    const nomeUsuarioFormatoValido = /^[A-Za-z]{3,20}$/;
    const usuario = document.getElementById("usuario").value;

    return nomeUsuarioFormatoValido.test(usuario);
}

function validarSenha() {
    const senha = document.getElementById("senha").value;
    const senhaFormatoValido = /^(?=.*[A-Z])(?=.*[\d@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return senhaFormatoValido.test(senha);
}


function exibirMensagens(erros) {

    if (erros.length > 0) {
        let erroMsg = "Inscrição não realizada. Corrija os erros:\n"
        erroMsg += erros.join("; \n");
        alert(erroMsg);
        return;
    }
    alert("Inscrição realizada com sucesso.");
}

formularioInsricao.addEventListener('submit', (event) => {
    const validacoes = [
        {valido: validarNome(), mensagem: "Nome inválido"},
        {valido: validarDataNascimento(), mensagem: "Data de nascimento inválida"},
        {valido: validarCpf(), mensagem: "CPF inválido"},
        {valido: validarTelefone(), mensagem: "Telefone inválido"},
        {valido: validarEmail(), mensagem: "Email inválido"},
        {valido: validarCep(), mensagem: "CEP inválido"},
        {valido: validarEndereco(), mensagem: "Endereço não inválido"},
        {valido: validarTrilhas(), mensagem: "Selecione uma opção no campo de Trilhas"},
        {valido: validarUsuario(), mensagem: "O nome de usuário deve ter entre 3 e 20 letras, sem espaços acentos ou caracteres especiais"},
        {valido: validarSenha(), mensagem: "A senha deve conter pelo menos uma letra maiúscula, número ou caractere especial, e nenhum espaço"}
    ];

    const erros = validacoes.filter((validacao) => !validacao.valido).map((validacao) => validacao.mensagem);
    
    if (erros.length > 0) {
        event.preventDefault();
    }
    exibirMensagens(erros);
});