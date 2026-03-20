function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // validação simples
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // validação de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    // simulação de envio
    alert("Mensagem enviada com sucesso!");

    // limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
}

function toggleTema() {
    document.body.classList.toggle("dark");
}

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}