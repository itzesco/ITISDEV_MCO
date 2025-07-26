let slideIndexMap = {
  "services-carousel": 0,
  "promos-carousel": 0
};

function showSlide(id, index) {
  const carousel = document.getElementById(id);
  const total = carousel.children.length;
  slideIndexMap[id] = index % total;
  carousel.style.transform = `translateX(-${slideIndexMap[id] * 100}%)`;
}

function nextSlide(id) {
  showSlide(id, slideIndexMap[id] + 1);
}

function prevSlide(id) {
  const carousel = document.getElementById(id);
  const total = carousel.children.length;
  showSlide(id, (slideIndexMap[id] - 1 + total) % total);
}

setInterval(() => nextSlide('services-carousel'), 3000);
setInterval(() => nextSlide('promos-carousel'), 3000);
