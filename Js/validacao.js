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
    const usuario = document.getElementById("usuario").value;

    if(!usuario) {
        return false;
    }
    return true;
}

function validarSenha() {
    const senha = document.getElementById("senha").value;

    if(!senha) {
        return false;
    }
    return true;
}

function validarFormulario() {
    const nomeValido = validarNome();
    const dataNascimentoValidar = validarDataNascimento();
    const cpfValido = validarCpf();
    const telefoneValido = validarTelefone();
    const emailValido = validarEmail();
    const cepValido = validarCep();
    const enderecoValido = validarEndereco();
    const trilhasValido = validarTrilhas();
    const termoValido = validarTermoCompromisso();
    const usuarioValido = validarUsuario();
    const senhaValida = validarSenha();


    if (nomeValido && dataNascimentoValidar && cpfValido && telefoneValido && cepValido) {
        alert("Inscrição realizada com sucesso!");
        return true;
    }

    let erroMsg = "Inscrição não realizada! Corrija os erros:\n";

    if (!nomeValido) erroMsg += "- Nome inválido!\n";
    if (!dataNascimentoValidar) erroMsg += "- Data de Nascimento inválido!\n";
    if (!cpfValido) erroMsg += "- CPF inválido!\n";
    if (!telefoneValido) erroMsg += "- Telefone inválido!\n";
    if (!emailValido) erroMsg += "- Email inválido!\n";
    if (!cepValido) erroMsg += "- CEP inválido!\n";
    if (!enderecoValido) erroMsg += "- Endereco inválido!\n";
    if (!trilhasValido) erroMsg += "- Selecione uma Trilha!\n";
    if (!termoValido) erroMsg += "- Termo e condições não selecionado!\n";
    if(!usuarioValido) erroMsg += "- Usuário não informado!\n";
    if(!senhaValida) erroMsg += "- Senha não informada!";

    alert(erroMsg);

    return false;
}