function verificarSelecoes() {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const genero = document.querySelector('input[name="genero"]:checked');
  const interesses = document.querySelectorAll('input[name="interesses"]:checked');

  if (genero && (genero.value.toLowerCase() === "feminino") && idade > 0 && interesses.length <= 5) {
    document.body.classList.remove('cor-azul');
    document.body.classList.add('cor-rosa');
  } else {
    document.body.classList.remove('cor-rosa');
    document.body.classList.add('cor-azul');
  }

  let textoSelecoes = `Seleções do usuário:\n`;
  textoSelecoes += `Nome: ${nome}\n`;
  textoSelecoes += `Idade: ${idade}\n`;
  textoSelecoes += `Gênero: ${genero ? genero.value : 'Nenhum selecionado'}\n`;
  textoSelecoes += `Interesses: `;
  if (interesses.length > 0) {
    interesses.forEach((interesse) => {
      textoSelecoes += `${interesse.value}, `;
    });
    textoSelecoes = textoSelecoes.slice(0, -2);
  } else {
    textoSelecoes += `Nenhum selecionado`;
  }

  console.log(textoSelecoes);
}
