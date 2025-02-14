document.addEventListener("DOMContentLoaded", () => {
  const initializeSlider = (sliderContainer) => {
    const slides = sliderContainer.querySelectorAll(".slide");
    const dotsContainer = sliderContainer.nextElementSibling;
    const dots = Array.from({ length: slides.length }, (_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot-navigation-item");
      if (i === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);
      return dot;
    });

    let currentSlide = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    showSlide(currentSlide);
    setInterval(nextSlide, 3500); // Change slide every 3 seconds
  };

  document.querySelectorAll(".slider").forEach(initializeSlider);
});
