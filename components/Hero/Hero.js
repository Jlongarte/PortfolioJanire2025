import "./Hero.css";

const template = () => `

  <div class="hero-inner">
    <div class="hero-left">
      <h1 class="headline">
        <span class="muted">Janire Gonzalez🚀</span><br>
        <span class="estudiante"> Estudiante de</span><br>
        <span class="gradient-text">Desarrollo Full Stack</span>
      </h1>
      <p class="lead">
       ¡Hey! Soy <strong>Janire</strong>, desarrolladora web Full Stack en formación y amante del código con estilo.
Entre React y Node.js, me gusta dar vida a ideas digitales y aprender algo nuevo cada día.
Busco prácticas curriculares donde seguir creciendo y dejar mi huella en cada proyecto.
      </p>
      <div class="hero-actions">
        <a class="btn primary" href="#projects">Ver Proyectos</a>
        <a class="btn ghost" href="#contact">Conecta Conmigo</a>
      </div>
      <div class="socials">
        <a href="https://github.com/Jlongarte" target="_blank" aria-label="GitHub">
          Github
        </a>
        <a href="https://www.linkedin.com/in/%F0%9F%92%BB-janire-gonzalez-13aa78258/" target="_blank" aria-label="LinkedIn">
          Linkedin
        </a>
      </div>
    </div>
  </div>

`;

const Hero = () => {
  const app = document.querySelector(".hero");
  app.innerHTML = template();

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Partículas
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let w, h;

  const init = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        color: `hsla(${Math.random() * 360}, 70%, 70%, 0.8)`,
      });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  };

  window.addEventListener("resize", init);
  init();
  draw();
};

export default Hero;
