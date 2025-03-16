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

function validarCep() {
    const cep = document.getElementById("cep").value;
    const cepFormatoValido = /^\d{5}-\d{3}$/;

    return cepFormatoValido.test(cep);
}

function validarFormulario() {
    const cpfValido = validarCpf();
    const telefoneValido = validarTelefone();
    const cepValido = validarCep();

    if (cpfValido && telefoneValido && cepValido) {
        alert("Inscrição realizada com sucesso!");
        return true;
    }

    let erroMsg = "Inscrição não realizada! Corrija os erros:\n";

    if (!cpfValido) erroMsg += "- CPF inválido!\n";
    if (!telefoneValido) erroMsg += "- Telefone inválido!\n";
    if (!cepValido) erroMsg += "- CEP inválido!\n";

    alert(erroMsg);

    return false;
}