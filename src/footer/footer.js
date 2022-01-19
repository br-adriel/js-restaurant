import "./footer.css";

const footer = document.createElement("footer");

const p = document.createElement("p");
p.innerText = `Adriel Faria, ${new Date().getFullYear()}`;
footer.appendChild(p);

// factory de link do footer
function linkHtml(link, icone, novaJanela = true) {
  const node = document.createElement("a");
  node.setAttribute("href", link);
  node.appendChild(icone);

  if (novaJanela) {
    node.setAttribute("target", "_blank");
    node.setAttribute("noopener", "");
    node.setAttribute("noreferrer", "");
  }

  return node;
}

const links = document.createElement("div");

const githubIcon = document.createElement("i");
githubIcon.classList.add("fab", "fa-github-alt");

const linkedinIcon = document.createElement("i");
linkedinIcon.classList.add("fab", "fa-linkedin-in");

const github = linkHtml("https://github.com/br-adriel", githubIcon);
links.appendChild(github);

const linkedin = linkHtml(
  "https://www.linkedin.com/in/adriel-fsantos/",
  linkedinIcon
);
links.appendChild(linkedin);

footer.appendChild(links);
export default footer;
