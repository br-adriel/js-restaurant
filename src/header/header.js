import "./header.css";

const header = document.createElement("header");

// container para conteudo do header
const container = document.createElement("div");
container.classList.add("container");

// factory function de li para a navbar
function liNav(texto, id, selecionado = false, link = "#") {
  // cria o list item da navbar
  const li = document.createElement("li");
  li.setAttribute("id", id);
  if (selecionado) {
    li.classList.add("selecionado");
  }

  // cria o link do item
  const a = document.createElement("a");
  a.innerText = texto;
  a.setAttribute("href", link);
  li.appendChild(a);

  return li;
}

// funcao para mudar visual do item selecionado
function selecionarLi(id, liNodes) {
  liNodes.map((li) => {
    li.id === id
      ? li.classList.add("selecionado")
      : li.classList.remove("selecionado");
  });
}

// --- LOGO ---
const h1 = document.createElement("h1");
h1.classList.add("logo");
h1.textContent = "Pepe Pizzas";
container.appendChild(h1);

// --- NAVBAR ---
const itensLi = [
  {
    texto: "Página inicial",
    id: "nav-pagina-inicial",
    selecionado: true,
  },
  {
    texto: "Cardápio",
    id: "nav-cardapio",
    selecionado: false,
  },
  {
    texto: "Contato",
    id: "nav-contato",
    selecionado: false,
  },
];

// armazerna os nodes html dos li
const liNodes = [];

// adiciona os itens li da navbar na lista
const ul = document.createElement("ul");
itensLi.map((item) => {
  const novoLi = liNav(item.texto, item.id, item.selecionado);
  liNodes.push(novoLi);
  novoLi.addEventListener("click", () => selecionarLi(item.id, liNodes));
  ul.appendChild(novoLi);
});

// adiciona lista na navbar
const nav = document.createElement("nav");
nav.appendChild(ul);
container.appendChild(nav);

header.appendChild(container);

export { liNodes, header };
