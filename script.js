// ===== TYPEWRITER EFFECT =====
const typewriterElement = document.getElementById('typewriter-text');
const words = [
  "BUILDING",
  "DEPLOYING"
];

let taglineIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typewrite() {
  const currentWords = words[taglineIndex];

  if (!isDeleting) {
    // Typing forward
    typewriterElement.textContent = currentWords.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWords.length) {
      // Pause at end of a word before deleting
      isDeleting = true;
      setTimeout(typewrite, 1800);
      return;
    }
    setTimeout(typewrite, typingSpeed);
  } else {
    // Deleting
    typewriterElement.textContent = currentWords.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      taglineIndex = (taglineIndex + 1) % words.length;
      setTimeout(typewrite, 400);
      return;
    }
    setTimeout(typewrite, 40);
  }
}

// Start the typewriter when page loads
document.addEventListener('DOMContentLoaded', function () {
  typewrite();
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');

navToggle.addEventListener('click', function () {
  navbar.classList.toggle('nav-open');
});

// Close mobile nav when a link is clicked
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navbar.classList.remove('nav-open');
  });
});

// ===== SMOOTH SCROLL FOR NAV LINKS (fallback) =====
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
