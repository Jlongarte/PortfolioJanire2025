import "./Contact.css";

const template = () => {
  return `
  <div class="contact-inner">
            <div>
                <h3>¿Te he convencido?</h3>
                <p>Gracias por pasarte. Actualmente me encuentro buscando prácticas curriculares. Si crees que
                    podríamos trabajar bien juntos, no dudes en enviarme un <a href="mailto:longarte.janire@gmail.com" target="_blank" aria-label="email">correo electrónico</a>.</p>
            </div>

            <div class="contact-box">
                <h4>¡Conéctemos!👋</h4>
                <div class="socials large">
                    <a href="https://github.com/Jlongarte" target="_blank" aria-label="GitHub">GitHub</a>
                    <a href="https://www.linkedin.com/in/%F0%9F%92%BB-janire-gonzalez-13aa78258/" target="_blank" aria-label="LinkedIn">LinkedIn</a>
                    <a href="mailto:longarte.janire@gmail.com" target="_blank" aria-label="email">Email</a>
                </div>
            </div>
        </div>
    `;
};

const Contact = () => {
  const contact = document.querySelector(".contact");
  contact.innerHTML = template();
};

export default Contact;
