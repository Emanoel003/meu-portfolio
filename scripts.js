// Adiciona um evento de submissão ao formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();
    
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verifica se todos os campos estão preenchidos
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.'); // Exibe um alerta se algum campo estiver vazio
        return;
    }

    // Verifica se o e-mail é válido
    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.'); // Exibe um alerta se o e-mail for inválido
        return;
    }

    // Exibe uma mensagem de sucesso
    alert('Formulário enviado com sucesso!');
});

// Função para validar o formato do e-mail
function validateEmail(email) {
    // Expressão regular para validar o e-mail
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email); // Retorna verdadeiro se o e-mail for válido
}

