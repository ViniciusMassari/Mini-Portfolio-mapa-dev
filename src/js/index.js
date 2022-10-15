const abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
  aba.addEventListener("click", () => {
    if (aba.classList.contains("selecionado")) {
      return;
    }

    selecionarAba(aba);

    mostrarInformacaoAba(aba);
  });
});

function selecionarAba(aba) {
  const abaSelecionada = document.querySelector(".aba.selecionado");
  abaSelecionada.classList.remove("selecionado");

  aba.classList.add("selecionado");
}

function mostrarInformacaoAba(aba) {
  const informationSelected = document.querySelector(".informacao.selecionado");
  informationSelected.classList.remove("selecionado");

  const idElementoInformacao = `informacao-${aba.id}`;

  const informacaoMostrada = document.getElementById(idElementoInformacao);
  informacaoMostrada.classList.add("selecionado");
}
