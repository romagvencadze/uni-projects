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





// Select the buttons and the content sections
const filmebiButton = document.querySelector('.filmebi');
const seansebiButton = document.querySelector('.seansebi');
const filmebiContent = document.createElement('div');
const seansebiContent = document.createElement('div');

// Initialize content for each section
filmebiContent.innerHTML = '<p>Content for ფილმები (Movies)</p>';
seansebiContent.innerHTML = '<p>Content for სეანსები (Sessions)</p>';

// Style the content sections
filmebiContent.style.display = 'none';
seansebiContent.style.display = 'none';
document.body.appendChild(filmebiContent);
document.body.appendChild(seansebiContent);

// Function to reset button styles
function resetButtonStyles() {
    filmebiButton.style.backgroundColor = 'white';
    filmebiButton.style.color = 'black';
    seansebiButton.style.backgroundColor = 'white';
    seansebiButton.style.color = 'black';
    filmebiContent.style.display = 'none';
    seansebiContent.style.display = 'none';
}

// Event listeners for the buttons
filmebiButton.addEventListener('click', () => {
    resetButtonStyles();
    filmebiButton.style.backgroundColor = 'red';
    filmebiButton.style.color = 'white';
    filmebiContent.style.display = 'block';
});

seansebiButton.addEventListener('click', () => {
    resetButtonStyles();
    seansebiButton.style.backgroundColor = 'red';
    seansebiButton.style.color = 'white';
    seansebiContent.style.display = 'block';
});

// Set the default selected button
filmebiButton.click();

