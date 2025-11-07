import "./Preloader.css";

const Preloader = () => {
  const preloader = document.createElement("section");
  preloader.classList.add("preloader");

  preloader.innerHTML = `
    <div class="orbit-container">
      <div class="center-logo">
        <img src="/avatarLilabg.png" alt="logo">
      </div>
      <div class="orbit">
        <div class="icon">HTML</div>
        <div class="icon">CSS</div>
        <div class="icon">Bootstrap</div>
        <div class="icon">JS</div>
        <div class="icon">React</div>
        <div class="icon">Node</div>
        <div class="icon">Express</div>
        <div class="icon">TypeScript</div>
        <div class="icon">MongoDB</div>
        <div class="icon">MySQL</div>
        <div class="icon">Git</div>
        <div class="icon">AWS</div>
      </div>
    </div>
  `;

  document.body.prepend(preloader);
};

export default Preloader;
