import "./Header.css";
const template = () => {
  return `
    <nav>
    <ul><li><a href="#projects">Proyectos</a></li>
    <li><a href="#contact">Contacto</a></li>
    </ul>
    
      
   

  </nav>
    `;
};

const Header = () => {
  const header = document.querySelector(".header");
  header.innerHTML = template();
};

export default Header;
