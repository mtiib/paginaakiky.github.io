
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) slide.classList.add('active');
  });
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faq-question .arrow').forEach(a => a.textContent = '➕');
    if (!isVisible) {
      answer.style.display = 'block';
      button.querySelector('.arrow').textContent = '➖';
    }
  });
});

// IntersectionObserver for scroll reveal
const sections = document.querySelectorAll('.scroll-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Toggle sección equipo al hacer clic en el bloque "Nuestro equipo"
const equipoToggle = document.getElementById('toggle-equipo');
const equipoSection = document.querySelector('.equipo.scroll-section');
if (equipoToggle && equipoSection) {
  equipoToggle.style.cursor = 'pointer';
  equipoToggle.addEventListener('click', () => {
    if (equipoSection.style.display === 'none') {
      equipoSection.style.display = 'block';
      equipoSection.classList.add('visible');
    } else {
      equipoSection.style.display = 'none';
    }
  });
}

// Mostrar/ocultar sección del equipo desde el banner
document.addEventListener("DOMContentLoaded", () => {
  const equipoToggle = document.getElementById("equipo-toggle");
  const equipoSection = document.querySelector(".equipo.scroll-section");

  if (equipoToggle && equipoSection) {
    equipoToggle.addEventListener("click", () => {
      equipoSection.classList.toggle("hidden");
      equipoSection.classList.add("visible");
    });
  }
});

// Modal para ampliar imágenes de Nuestro Equipo
document.querySelectorAll('.equipo-card').forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('img').src;
    const name = card.querySelectorAll('p')[0].textContent;
    const role = card.querySelectorAll('p')[1].textContent;

    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-role').textContent = role;

    document.getElementById('modal').classList.remove('hidden');
  });
});

// Cerrar el modal
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});

document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target.id === 'modal') {
    document.getElementById('modal').classList.add('hidden');
  }
});

// Expansión directa dentro del bloque del banner "Nuestro equipo"
const toggleEquipo = document.getElementById("equipo-toggle");
const listaEquipo = document.getElementById("equipo-lista");
if (toggleEquipo && listaEquipo) {
  toggleEquipo.addEventListener("click", () => {
    listaEquipo.classList.toggle("hidden");
  });
}
