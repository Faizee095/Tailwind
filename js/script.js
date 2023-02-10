const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

const slider = document.querySelector("#slider");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentSlide = 0;
const slides = slider.children;
console.log(slides)

const updateSlider = () => {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
};

prevBtn.addEventListener("click", () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
  updateSlider();
});

document.addEventListener("keydown", event => {
  if (event.code === "ArrowLeft") {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    updateSlider();
  } else if (event.code === "ArrowRight") {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    updateSlider();
  }
});

slider.style.display = "flex";
updateSlider();

