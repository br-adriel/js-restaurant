import "./tabInicio.css";
import imgApresentacao from "./img/apresentacao.jpg";
import imgIngredientes from "./img/ingredientes.jpg";
import imgChef from "./img/chef.jpg";
import imgVariedade from "./img/variedade.jpg";
import imgMusica from "./img/musica.jpg";

const tabInicio = document.createElement("div");
tabInicio.classList.add("tab-inicio");

// bloco de apresentacao
const apresentacao = (() => {
  const section = document.createElement("section");
  section.classList.add("apresentacao", "bloco");

  const imagem = new Image();
  imagem.src = imgApresentacao;
  section.appendChild(imagem);

  const div = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.classList.add("cursivo");
  h2.innerText = "Um sabor inigualável lhe aguarda!";
  div.appendChild(h2);

  const p = document.createElement("p");
  p.innerText =
    "Venha experimentar nossas pizzas produzidas com ingredientes selecionados e pensadas especialmente para você.";
  div.appendChild(p);

  const btn = document.createElement("button");
  btn.innerText = "Faça uma reserva";
  div.appendChild(btn);

  section.appendChild(div);
  return section;
})();

// factory para blocos de destaque
function destaqueHtml(imgSrc, titulo, descricao) {
  const div = document.createElement("div");
  div.classList.add("bloco", "destaque");

  const divTexto = document.createElement("div");

  const img = new Image();
  img.src = imgSrc;
  div.appendChild(img);

  const h3 = document.createElement("h3");
  h3.classList.add("cursivo");
  h3.innerText = titulo;
  divTexto.appendChild(h3);

  const p = document.createElement("p");
  p.innerText = descricao;
  divTexto.appendChild(p);

  div.appendChild(divTexto);

  return div;
}

const destaques = document.createElement("section");
destaques.classList.add("destaques");

const itensDestaque = [
  {
    imgSrc: imgIngredientes,
    titulo: "Ingredientes selecionados",
    descricao:
      "Nossas pizzas são preparadas apenas com ingredientes de qualidade para lhe oferecer o melhor sabor",
  },
  {
    imgSrc: imgChef,
    titulo: "Técnica de preparo",
    descricao:
      "O comando da nossa cozinha está nas mãos de ninguém menos que Pepe Roni, o renomado pizzaiolo da TV",
  },
  {
    imgSrc: imgVariedade,
    titulo: "Variedade de sabores",
    descricao:
      "Com um cardápio repleto de diferentes opções de cobertura, você com certeza encontrará sua pizza preferida aqui.",
  },
  {
    imgSrc: imgMusica,
    titulo: "Música para os seus ouvidos",
    descricao:
      "Todas as quintas, sextas e sábados, cantores da comunidade trazem música ao vivo ao nosso restaurante",
  },
];

// gera e adiciona os itens de destaque na div
itensDestaque.map((item) => {
  const itemNode = destaqueHtml(item.imgSrc, item.titulo, item.descricao);
  destaques.appendChild(itemNode);
});

tabInicio.appendChild(apresentacao);
tabInicio.appendChild(destaques);

export default tabInicio;
