// Intersection Observer for Fade-in Animations
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// The Highlights
let presentIndex = 0;
const ffour = document.querySelector(".ffour");
const dots = document.querySelectorAll(".dot");
let autoSlideInterval;

// Function to show a specific slide
function showSlide(index) {
  if (index >= dots.length) presentIndex = 0;
  else if (index < 0) presentIndex = dots.length - 1;
  else presentIndex = index;
  ffour.style.transform = `translateX(-${presentIndex * 100}%)`;
}

// Function to move slides
function moveSlide(step) {
  showSlide(presentIndex + step);
  resetAutoSlide();
}

// Function to jump to a specific slide
function currentIndex(index) {
  showSlide(index - 1);
  resetAutoSlide();
}

// Auto-slide functionality
function autoSlide() {
  autoSlideInterval = setInterval(() => {
    moveSlide(1);
  }, 4000);
}

// Reset auto-slide timer
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlide();
}

// Modal for full-screen view
function enlargeImage(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("fullviewImage");
  modal.style.display = "block";
  modalImg.src = src;
}

// Close modal
function exitModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Initialize slider on page load
document.addEventListener("DOMContentLoaded", () => {
  showSlide(1);
  autoSlide();
});
