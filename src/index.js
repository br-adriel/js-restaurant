import "./index.css";
import header from "./header/header";
import inicio from "./tab-inicio/tabInicio";

const content = document.getElementById("content");
content.appendChild(header);

const main = document.createElement("main");
main.appendChild(inicio);
content.append(main);
