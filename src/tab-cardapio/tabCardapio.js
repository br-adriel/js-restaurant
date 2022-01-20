import "./tabCardapio.css";

// factory function de prato do cardapio
function pratoHtml(nome, preco = 0, descricao = "", tipo) {
  const prato = document.createElement("div");
  prato.classList.add("prato", "bloco");

  const icone = document.createElement("i");
  icone.classList.add("icone");
  switch (tipo) {
    case "pizza":
      icone.classList.add("fas", "fa-pizza-slice");
      break;
    case "bebida":
      icone.classList.add("fas", "fa-wine-glass-alt");
      break;
    default:
      icone.classList.add("fas", "fa-question");
  }

  const divIcone = document.createElement("div");
  divIcone.classList.add("div-icone");
  divIcone.appendChild(icone);
  prato.appendChild(divIcone);

  const info = document.createElement("div");
  info.classList.add("info");

  const pNome = document.createElement("p");
  pNome.classList.add("nome");
  pNome.innerText = nome;
  info.appendChild(pNome);

  const pDescricao = document.createElement("p");
  pDescricao.classList.add("descricao");
  pDescricao.innerText = descricao;
  info.appendChild(pDescricao);

  const pPreco = document.createElement("p");
  pPreco.classList.add("preco");
  pPreco.innerText = "R$ ";

  const spanValor = document.createElement("span");
  spanValor.classList.add("valor");
  spanValor.innerText = preco.toFixed(2);
  pPreco.appendChild(spanValor);

  info.appendChild(pPreco);

  prato.appendChild(info);

  return prato;
}

const cardapio = document.createElement("div");
cardapio.classList.add("tab-cardapio");

const pratos = [
  {
    nome: "Muçarela",
    preco: 23.6,
    descricao: "",
    tipo: "pizza",
  },
  {
    nome: "Calabreza",
    preco: 25.8,
    descricao: "",
    tipo: "pizza",
  },
  {
    nome: "Frango com catupiry",
    preco: 24.65,
    descricao: "",
    tipo: "pizza",
  },
  {
    nome: "Portuguesa",
    preco: 28,
    descricao: "",
    tipo: "pizza",
  },
  {
    nome: "Suco de Abacaxi",
    preco: 5.2,
    descricao: "Já adoçado",
    tipo: "bebida",
  },
  {
    nome: "Refrigerante 1L",
    preco: 4.35,
    descricao: "",
    tipo: "bebida",
  },
  {
    nome: "Suco de laranja",
    preco: 3.75,
    descricao: "Já adoçado",
    tipo: "bebida",
  },
  {
    nome: "Suco de Cajú",
    preco: 4,
    descricao: "Já adoçado",
    tipo: "bebida",
  },
];

pratos.map((prato) => {
  const pratoNode = pratoHtml(
    prato.nome,
    prato.preco,
    prato.descricao,
    prato.tipo
  );
  cardapio.appendChild(pratoNode);
});

export default cardapio;
