import './style.css'

// Botón para menú del móvil
const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });


// Año actual
const fecha = document.querySelector(".current-year");

fecha.textContent = new Date().getFullYear();