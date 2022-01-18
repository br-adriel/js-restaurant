import "./index.css";
import { header, liNodes } from "./header/header";
import inicio from "./tab-inicio/tabInicio";

const content = document.getElementById("content");
content.appendChild(header);

const main = document.createElement("main");
main.appendChild(inicio);
content.append(main);

// implementa troca de guias
liNodes.map((li) => {
  li.addEventListener("click", (e) => {
    if (main.childNodes.length > 0) {
      main.removeChild(main.childNodes[0]);
    }
    console.log(e.currentTarget.id);
    switch (e.currentTarget.id) {
      case "nav-pagina-inicial":
        main.appendChild(inicio);
        break;
      case "nav-cardapio":
        break;
      case "nav-contato":
        break;
    }
  });
});
