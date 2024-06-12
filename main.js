var typed = new Typed('.text', {
    strings: [ " Web Developer", " Python Developer", "Electrical Engineer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


