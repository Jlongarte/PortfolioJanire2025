import "./Footer.css";

const template = () => {
  return `
  <small>Desarrollado con ❤️ por Janire González Garayoa</small>
    `;
};

const Footer = () => {
  const footer = document.querySelector("footer");
  footer.innerHTML = template();
};

export default Footer;
