let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.children.length;

  // Wrap around if the index goes out of bounds
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;

  // Update active dot
  dots.forEach((dot, idx) => {
    if (idx === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Create dots dynamically for all slides and ensure they are on every slide
function createDots() {
  const slides = document.querySelector('.slides');
  const dotsContainer = document.querySelector('.dots');
  const totalSlides = slides.children.length;

  // Clear any existing dots before adding
  dotsContainer.innerHTML = '';

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i)); // Add click event for each dot
    dotsContainer.appendChild(dot);
  }

  // Ensure the first dot is active initially and show the first slide
  showSlide(currentIndex);
}

// Initialize the slider
createDots();

// Auto-play slider (optional)
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);





// Select buttons and content sections
const filmebiButton = document.querySelector('.filmebi');
const seansebiButton = document.querySelector('.seansebi');
const filmebiContent = document.querySelector('.filmebi-content');
const seansebiContent = document.querySelector('.seansebi-content');

// Function to reset button styles and hide content
function resetButtonStyles() {
    // Reset button styles
    filmebiButton.classList.remove('active');
    filmebiButton.classList.add('inactive');
    seansebiButton.classList.remove('active');
    seansebiButton.classList.add('inactive');

    // Hide both content sections
    filmebiContent.style.display = 'none';
    seansebiContent.style.display = 'none';
}

// Function to show "ფილმები" content
function showFilmebiContent() {
    resetButtonStyles();
    filmebiButton.classList.add('active');
    filmebiButton.classList.remove('inactive');
    filmebiContent.style.display = 'block';
}

// Function to show "სეანსები" content
function showSeansebiContent() {
    resetButtonStyles();
    seansebiButton.classList.add('active');
    seansebiButton.classList.remove('inactive');
    seansebiContent.style.display = 'block';
}

// Event listeners for buttons
filmebiButton.addEventListener('click', showFilmebiContent);
seansebiButton.addEventListener('click', showSeansebiContent);

// Set default selected button and page on load
document.addEventListener('DOMContentLoaded', () => {
    showFilmebiContent(); // "ფილმები" content is shown by default
});
