// Initialize sliders for all elements with the class 'slider'
document.addEventListener("DOMContentLoaded", () => {
  const sliderContainers = document.querySelectorAll(".slider-container");
  sliderContainers.forEach((container) => new Slider(container));
});
// The Slider class encapsulates the logic for handling the slideshow functionality. It initializes the slider by finding the slides within the container, setting the initial slide index, and showing the first slide. It also provides methods for changing the current slide by a specified number of slides and for showing a specific slide by index.

// Define the Slider class
class Slider {
  constructor(container) {
    this.container = container;
    this.slides = container.getElementsByClassName("slide");
    this.slideIndex = 0;

    this.showSlides(this.slideIndex); // Show the first slide initially

    // Add event listeners for the next and previous buttons if they exist
    const prevButton = container.querySelector(".prev");
    const nextButton = container.querySelector(".next");

    if (prevButton) {
      prevButton.addEventListener("click", () => this.plusSlides(-1));
    }
    if (nextButton) {
      nextButton.addEventListener("click", () => this.plusSlides(1));
    }
  }

  // Function to change the current slide by n slides (forward or backward)
  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  // Function to show the slide at index n
  showSlides(n) {
    if (n >= this.slides.length) {
      this.slideIndex = 0;
    }
    if (n < 0) {
      this.slideIndex = this.slides.length - 1;
    }
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }
    this.slides[this.slideIndex].style.display = "block";
  }
}
