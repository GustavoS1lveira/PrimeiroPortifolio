// Seleciona o elemento de resultado e os botões padrões da calculadora
let elementoResultado = document.querySelector(".js-resultado");
let botoesPadroes = document.querySelectorAll(".js-btn-padroes");

// Seleciona os botões específicos da calculadora
let botaoResultado = document.querySelector(".js-btn-igual");
let botaoAC = document.querySelector(".js-btn-ac");
let botaoMaisMenos = document.querySelector(".js-btn-mais-menos");
let botaoDeletar = document.querySelector(".js-btn-del");

// Função para adicionar um número ou operador ao resultado
function adicionarElementoAoInputResultado(numeroDigitado) {
  verificarSimboloDuplicado(numeroDigitado);
  if (verificarSimboloInicial(numeroDigitado)) return;
  elementoResultado.value += numeroDigitado;
}

// Função para executar o cálculo quando o botão "=" é clicado
function executarCalculo() {
  try {
    elementoResultado.value = eval(elementoResultado.value);
  } catch {
    alert("Algo deu errado. Tente novamente.");
  }
}

// Função para limpar o resultado (botão "AC")
function limparResultado() {
  elementoResultado.value = "";
}

// Função para trocar o sinal do número (botão "+/-")
function trocarSinalDaConta() {
  if (Number(elementoResultado.value)) {
    elementoResultado.value = elementoResultado.value * -1;
  }
}

// Função para deletar o último caractere do resultado (botão "DEL")
function deletarUltimaLetraDoResultado() {
  elementoResultado.value = elementoResultado.value.slice(0, -1);
}

// Função para verificar se há símbolo duplicado ao adicionar um número ou operador
function verificarSimboloDuplicado(numeroDigitadoRecebidoPorParametro) {
  let ultimoValorNoInputResultado =
    elementoResultado.value[elementoResultado.value.length - 1];
  if (
    ultimoValorNoInputResultado &&
    !Number(ultimoValorNoInputResultado) &&
    !Number(numeroDigitadoRecebidoPorParametro) &&
    ultimoValorNoInputResultado != 0 &&
    numeroDigitadoRecebidoPorParametro != 0
  ) {
    deletarUltimaLetraDoResultado();
  }
}

// Função para verificar se o símbolo inicial é válido ao iniciar a operação
function verificarSimboloInicial(numeroDigitadoRecebidoPorParametro) {
  if (
    elementoResultado.value.length == 0 &&
    !Number(numeroDigitadoRecebidoPorParametro)
  ) {
    return true;
  }
}

// Função para adicionar os event listeners aos botões
function gerenciarEscutadores() {
  botoesPadroes.forEach((elementoCorrente) => {
    elementoCorrente.addEventListener("click", () => {
      let valorDoElementoClicado = elementoCorrente.dataset.valor;
      adicionarElementoAoInputResultado(valorDoElementoClicado);
    });
  });

  botaoResultado.addEventListener("click", () => {
    executarCalculo();
  });

  botaoAC.addEventListener("click", () => {
    limparResultado();
  });

  botaoMaisMenos.addEventListener("click", () => {
    trocarSinalDaConta();
  });

  botaoDeletar.addEventListener("click", () => {
    deletarUltimaLetraDoResultado();
  });
}

// Inicia a adição de event listeners aos botões ao carregar a página
gerenciarEscutadores();
