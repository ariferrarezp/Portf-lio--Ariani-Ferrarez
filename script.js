function validarFormulario() {
  /*Pega os valores digitados nos campos do formulário*/
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  /*Verifica se algum campo está vazio*/
  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos!");
    return false; /*Impede o envio do formulário, caso n esteja preenchido*/
  }

  /*Verifica se o e-mail contém "@" e "."*/
  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um e-mail válido!");
    return false; /*Impede o envio do formulário, caso n tenha o @ e o .*/
  }

  /*Se tudo estiver certo, mostra mensagem de sucesso*/
  alert("Mensagem enviada com sucesso!");
  
  /*Limpa os campos do formulário*/
  document.getElementById("contato-form").reset();

  return false; // Impede o envio real (só mostra os alertas)
}
