import './style.css'

// Botón para menú del móvil
const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

//Efecto parallax en monstruos

const sections = document.querySelectorAll(".parallax-section");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const offsetTop = rect.top + scrollY;

    // Solo animar cuando la sección está visible
    if (
      scrollY + viewportHeight > offsetTop &&
      scrollY < offsetTop + section.offsetHeight
    ) {
      const progress = scrollY - offsetTop;

      // Fondo (más lento)
      section.style.backgroundPositionY = `${progress * 0.3}px`;

      // Monstruo (ligero efecto flotante)
      const monster = section.querySelector(".monster img");
      if (monster) {
        monster.style.transform = `translateY(${progress * -0.15}px)`;
      }
    }
  });
});

//Velocidad imagen monstruo

const bgSpeed = parseFloat(section.dataset.bg) || 0.3;
const monsterSpeed = parseFloat(section.dataset.monster) || -0.15;

section.style.backgroundPositionY = `${progress * bgSpeed}px`;
monster.style.transform = `translateY(${progress * monsterSpeed}px)`;


// Para desactivar parallax en modo móvil
if (window.innerWidth < 768) {
  sections.forEach(section => {
    section.style.backgroundPositionY = "0px";
    const monster = section.querySelector(".monster img");
    if (monster) monster.style.transform = "none";
  });
}

// Año actual
const fecha = document.querySelector(".current-year");

fecha.textContent = new Date().getFullYear();