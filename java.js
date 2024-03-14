document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    // Aqui você pode adicionar código para enviar o formulário, como uma requisição AJAX
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);
    alert("Formulário enviado com sucesso!");
});