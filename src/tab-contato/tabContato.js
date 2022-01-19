import "./tabContato.css";
import imgTelefone from "./img/telefone.jpg";
import imgEndereco from "./img/endereco.jpg";

const tabContato = document.createElement("div");
tabContato.classList.add("tab-contato");

const telefone = (() => {
  const tel = document.createElement("section");
  tel.classList.add("bloco", "telefone");

  const img = new Image();
  img.src = imgTelefone;
  tel.appendChild(img);

  const texto = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.classList.add("cursivo");
  h2.innerText = "84 91234-5678";
  texto.appendChild(h2);

  const p = document.createElement("p");
  p.innerText = "Faça uma reserva ou peça delivery";
  texto.appendChild(p);

  tel.appendChild(texto);
  return tel;
})();

const endereco = (() => {
  const end = document.createElement("section");
  end.classList.add("bloco", "endereco");

  const texto = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.classList.add("cursivo");
  h2.innerText = "Conheça nosso estabelecimento";
  texto.appendChild(h2);

  const p = document.createElement("p");
  p.innerText = "Estamos na Rua do Limoeiro, 123, no centro da cidade";
  texto.appendChild(p);
  end.appendChild(texto);

  const img = new Image();
  img.src = imgEndereco;
  end.appendChild(img);

  return end;
})();

tabContato.appendChild(telefone);
tabContato.appendChild(endereco);

export default tabContato;
