// Add event listeners to the dots
document.addEventListener("DOMContentLoaded", function () {
  // Function to initialize the slider
  const initializeSlider = (sliderContainer) => {
    // Get all slides within the slider container
    const slides = sliderContainer.querySelectorAll(".slide");
    // Get the container for the dots (assumed to be the next sibling element)
    const dotsContainer = sliderContainer.nextElementSibling;
    // Create dots for each slide and append them to the dots container
    const dots = Array.from({ length: slides.length }, (_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot-navigation-item");
      // Set the first dot as active by default
      if (i === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);
      return dot;
    });

    let currentSlide = 0; // Track the current slide index

    // Function to show a specific slide
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        // Toggle the 'active' class for the current slide
        slide.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        // Toggle the 'active' class for the corresponding dot
        dot.classList.toggle("active", i === index);
      });
    };

    // Function to show the next slide
    const nextSlide = () => {
      // Increment the current slide index, loop back to 0 if it exceeds the number of slides
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide); // Show the next slide
    };

    // Add click event listeners to each dot
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index; // Update the current slide index
        showSlide(currentSlide); // Show the clicked slide
      });
    });

    showSlide(currentSlide); // Show the initial slide
    setInterval(nextSlide, 3500); // Change slide every 3.5 seconds
  };

  // Initialize sliders for all elements with the class 'slider'
  document.querySelectorAll(".slider").forEach(initializeSlider);
});
