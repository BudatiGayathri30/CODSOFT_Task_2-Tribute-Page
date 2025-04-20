// Console greeting
console.log("Welcome to the Tribute Website of Dr. A.P.J. Abdul Kalam!");

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-to-top button logic
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = "⬆️";
scrollBtn.classList.add("scroll-to-top");
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle
const darkToggle = document.createElement('button');
darkToggle.innerText = "🌙 Toggle Dark Mode";
darkToggle.classList.add('dark-toggle');
document.body.appendChild(darkToggle);

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
