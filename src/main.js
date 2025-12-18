import './style.css'

const socialIcons = document.querySelector(".social-icons");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const menuLinks = mobileMenu.querySelectorAll("a");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {

    openBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
    socialIcons.classList.add("hidden");

  } else {
    
    openBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    socialIcons.classList.remove("hidden");
  }
});

// Cerrar al hacer clic en un link
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    openBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
    socialIcons.classList.add("hidden");
  });
});

//Efecto parallax en monstruos

const sections = document.querySelectorAll(".parallax-section");
const isMobile = window.innerWidth < 1024;

if (!isMobile) {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top + scrollY;

      if (
        scrollY + viewportHeight > offsetTop &&
        scrollY < offsetTop + section.offsetHeight
      ) {
        const progress = scrollY - offsetTop;

        const bgSpeed = parseFloat(section.dataset.bg) || 0.3;
        const monsterSpeed = parseFloat(section.dataset.monster) || -0.15;

        section.style.backgroundPositionY = `${progress * bgSpeed}px`;

        const monster = section.querySelector(".monster img");
        if (monster) {
          monster.style.transform = `translateY(${progress * monsterSpeed}px)`;
        }
      }
    });
  });
}

if (isMobile) {
  sections.forEach(section => {
    section.style.backgroundPositionY = "center";

    const monster = section.querySelector(".monster img");
    if (monster) {
      monster.style.transform = "none";
    }
  });
}

window.addEventListener("resize", () => {
  location.reload();
});


// Año actual
const fecha = document.querySelector(".current-year");

fecha.textContent = new Date().getFullYear();