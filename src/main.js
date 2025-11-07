import "./style.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Project from "../components/Projects/Project";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Preloader from "../components/Preloader/Preloader";

Preloader();

document.addEventListener("DOMContentLoaded", () => {
  Hero();
});

const init = () => {
  Header();
  Hero();
  Project();
  Contact();
  Footer();
};

window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.querySelector(".preloader");
    if (preloader) preloader.classList.add("hide");
  }, 3500);

  init();

  // CURSOR PERSONALIZADO

  // No mostrar si es móvil o tablet
  if (window.innerWidth < 768) return;

  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");

  // SVG circular con texto
  cursor.innerHTML = `
    <svg class="cursor-svg" viewBox="0 0 100 100">
      <defs>
        <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
      </defs>
      <text class="circle-text">
        <textPath href="#circlePath" startOffset="0%">
          GARAYOA · GARAYOA · GARAYOA · GARAYOA ·
        </textPath>
      </text>
    </svg>
  `;

  document.body.appendChild(cursor);

  // Ocultar mientras se ve el preloader
  const preloader = document.querySelector(".preloader");
  if (preloader) cursor.style.display = "none";

  const observer = new MutationObserver(() => {
    if (preloader && preloader.classList.contains("hide")) {
      cursor.style.display = "flex";
      observer.disconnect();
    }
  });

  if (preloader) observer.observe(preloader, { attributes: true });

  // Movimiento suave del cursor
  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;
  const speed = 0.2;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(animate);
  }

  animate();
});
