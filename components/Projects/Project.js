import "./Project.css";

const template = () => {
  return `
   <div class="section-head">
                <h3 class="kicker">PRACTICAS DESTACADAS</h3>
                <p class="section-sub">Aquí algunas de mis prácticas personales</p>
            </div>

            <div class="projects-grid">
                <!-- PROYECTOS -->
                <!-- PROYECTO 1 -->
                <article class="project-card">
                    <div class="project-left" style="background:#7B2FF7;">
                        <span class="tech">HTML · SCSS · JAVASCRIPT · VITE</span>
                        <div class="logo-text">
                            <h3>ChillFlix</h3>
                        </div>
                    </div>
                    <div class="project-right">
                        <h4>Proyecto ChillFlix</h4>
                        <a href="https://chilflix-last-version.netlify.app/" target="_blank" class="link" >VER PROYECTO</a>
                        <p>Este proyecto es una recreación de la plataforma de streaming Disney+, desarrollada utilizando HTML, CSS, JavaScript (DOM) y Vite. Hace uso de la API de The Movie Database (https://www.themoviedb.org/
) para obtener la información de las películas y series.</p>
                    </div>
                    <span class="num">01</span>
                </article>

                <!-- PROYECTO 2 -->
                <article class="project-card">
                    <div class="project-left" style="background:#00C2FF;">
                        <span class="tech">HTML · SCSS · JAVASCRIPT · VITE</span>
                        <div class="logo-text">
                            <h3>Spotifly</h3>
                            
                        </div>
                    </div>
                    <div class="project-right">
                        <h4>Spotifly</h4>
                        <a href="https://spotifly-project.netlify.app/" target="_blank" class="link">VER PROYECTO</a>
                        <p>Este proyecto es una recreación de la interfaz de Spotify Web desarrollada con HTML, CSS, JavaScript y Vite, utilizando la API de iMusic para obtener datos reales sobre canciones, artistas y álbumes.
El objetivo del proyecto es aprender sobre consumo de APIs, diseño responsivo y arquitectura front-end moderna.</p>
                    </div>
                    <span class="num">02</span>
                </article>

                <!-- PROYECTO 3 -->
                <article class="project-card">
                    <div class="project-left" style="background:#F24182;">
                        <span class="tech">HTML · SCSS · JAVASCRIPT</span>
                        <div class="logo-text">
                            <h3>X Clone</h3>
                            
                        </div>
                    </div>
                    <div class="project-right">
                        <h4>X Clone</h4>
                        <a href="https://xcloneproject0.netlify.app/" target="_blank" class="link">VER PROYECTO</a>
                        <p>Un clon de Twitter desarrollado en JavaScript, HTML y CSS, que permite publicar tweets, dar likes, retweets, borrar tweets y responder a tweets específicos. Todos los datos se guardan en localStorage, por lo que se mantienen al recargar la página.</p>
                    </div>
                    <span class="num">03</span>
                </article>

                <!-- PROYECTO 4 -->
                <article class="project-card">
                    <div class="project-left" style="background:#FFD200;">
                        <span class="tech">HTML · SCSS · JAVASCRIPT · VITE</span>
                        <div class="logo-text">
                            <h3>CrazyBurguer Website</h3>
                         
                        </div>
                    </div>
                    <div class="project-right">
                        <h4>CrazyBurguer Website</h4>
                        <a href="https://projectcrazyburguer.netlify.app/" target="_blank" class="link">VER PROYECTO</a>
                        <p>CrazyBurguer es una interfaz web para un restaurante de hamburguesas moderna y atractiva, creada con HTML, CSS y JavaScript, utilizando Vite como entorno de desarrollo.</p>
                    </div>
                    <span class="num">04</span>
                </article>
            </div>
       

    `;
};

const Project = () => {
  const projects = document.querySelector(".projects");
  projects.innerHTML = template();
};

export default Project;
